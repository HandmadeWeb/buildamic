
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(['pasteLocations']),
        isValidPasteLocation() {
            return this.pasteLocations.includes(this.component.type);
        }
    },
    methods: {
        ...mapActions(["setPasteLocations"]),
        checkModuleCompatibility(type) {
            if (type === "field" || type === "set") {
                type = ["field", "set"]
            } else {
                type = [type]
            }
            return type.includes(this.component.type);
        },
        updateClipboard(newClip, context) {
            navigator.clipboard.writeText(newClip).then(() => {
                this.$toast.success(`${context.type} copied to clipboard, click any pulsing icon to paste it.`);
                this.setPasteLocations(context.type);
            }, function (err) {
                this.$toast.error(err)
            });
        },
        copyToClipboard() {
            let clipboardModule = JSON.stringify(this.component);
            navigator.permissions.query({ name: "clipboard-write" }).then(result => {
                if (result.state == "granted" || result.state == "prompt") {
                    this.updateClipboard(clipboardModule, this.component);
                }
            });
        },
        pasteFromClipboard() {
            navigator.permissions.query({ name: "clipboard-read" }).then(result => {
                if (result.state == "granted" || result.state == "prompt") {
                    navigator.clipboard.readText().then(clipboardText => {
                        let newModule = JSON.parse(clipboardText);
                        if (this.checkModuleCompatibility(newModule.type)) {
                            this.cloneModule(newModule)
                            this.setPasteLocations('');
                            this.emptyClipboard()
                        } else {
                            this.$toast.error(`Can only paste ${newModule.type} with other ${newModule.type}s'`);
                        }
                    });
                }
            });
        },
        tryParseJSON(jsonString) {
            if (jsonString) {
                try {
                    var o = JSON.parse(jsonString);

                    // Handle non-exception-throwing cases:
                    // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
                    // but... JSON.parse(null) returns null, and typeof null === "object",
                    // so we must check for that, too. Thankfully, null is falsey, so this suffices:
                    if (o && typeof o === "object") {
                        return o;
                    }
                }
                catch (e) { console.log("Clipboard does not contain valid JSON") }

                return false;
            }
        },
        emptyClipboard() {
            navigator.permissions.query({ name: "clipboard-write" }).then(result => {
                if (result.state == "granted" || result.state == "prompt") {
                    navigator.clipboard.writeText("").then(() => {
                        this.$toast.success("Clipboard cleared");
                    });
                }
            });
        },
        readFromClipboard() {
            navigator.permissions.query({ name: "clipboard-read" }).then(result => {
                if (result.state == "granted" || result.state == "prompt") {
                    navigator.clipboard.readText().then(clipboardText => {
                        if (!clipboardText) {
                            this.setPasteLocations('')
                            return
                        }
                        let newModule = this.tryParseJSON(clipboardText);

                        if (newModule && newModule.type) {
                            this.setPasteLocations(newModule.type);
                        } else {
                            this.setPasteLocations('')
                        }
                    });
                }
            });
        }
    }
}
