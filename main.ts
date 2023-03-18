import { Plugin, MarkdownRenderer, App, Modal, Setting, Notice, addIcon } from 'obsidian';

export default class SecretBlock extends Plugin {
	public res: string;
	public password = "CHANGE_IT";

	async onload() {
		// This 
		this.registerMarkdownCodeBlockProcessor("lock", (source, el, _) => {
			const container = el.createEl("div");
			container.className = "secret";

			const rows = source.split("\n");
			for (let row of rows)
				container.createEl("div", { text: row });

			/*container.addEventListener("click", async () => {
				if (container.className === "secret") {
					await this.openModal(); // Wait for modal to be closed
					if (this.res === this.password) {
						container.className = "secret-show";
						new Notice("The content is no longer hidden.");
						this.res = "";
					} else {
						container.className = "secret";
						new Notice('Invalid password!');
					}
				}
			});*/

			container.addEventListener("click", async () => {
				if (container.className === "secret") {
					await new Promise<void>((resolve) => {
						const modal = new PassModal(this.app, (result) => {
							new Notice(`Password entered: ${result}`);
							this.res = result;
							modal.close();
							resolve(); // Resolve the promise when the modal is closed
						});

						modal.open();
					});

					if (this.res === this.password) {
						container.className = "secret-show";
						new Notice("The content is no longer hidden.");
						this.res = "";
					} else {
						container.className = "secret";
						new Notice("Invalid password!");
					}
				}
			});



			container.addEventListener("dblclick", () => {
				if (container.className === "secret-show") {
					container.className = "secret";
					new Notice('The content has been hidden.');
				}
			});

		});
	}

	async openModal() {
		const modal = new PassModal(this.app, (result) => {
			this.res = result;
		});

		modal.open();
	}
}

class PassModal extends Modal {
	result: string;
	onSubmit: (result: string) => void;

	constructor(app: App, onSubmit: (result: string) => void) {
		super(app);
		this.onSubmit = onSubmit;
	}

	onOpen() {
		const { contentEl } = this;

		contentEl.createEl("h1", { text: "Enter your password to read that." });

		new Setting(contentEl)
			.setName("Password")
			.addText((text) =>
				text.onChange((value) => {
					this.result = value
				}));

		new Setting(contentEl)
			.addButton((btn) =>
				btn
					.setButtonText("Submit")
					.setCta()
					.onClick(() => {
						this.close();
						this.onSubmit(this.result);
					}));
	}

	onClose() {
		let { contentEl } = this;
		contentEl.empty();
	}
}

/*class PassModal extends Modal {
	result: string;
	onSubmit: (result: string) => void;

	constructor(app: App, onSubmit: (result: string) => void) {
		super(app);
		this.onSubmit = onSubmit;
	}

	onOpen() {
		const { contentEl } = this;

		contentEl.createEl("h1", { text: "Enter your password to read that." });

		const passwordInput = contentEl.createEl("input", {
			attr: { type: "password" },
			cls: "mod-input",
		});
		passwordInput.oninput = (evt) => {
			this.result = (evt.target as HTMLInputElement).value;
		};

		new Setting(contentEl)
			.addButton((btn) =>
				btn
					.setButtonText("Submit")
					.setCta()
					.onClick(() => {
						this.close();
						this.onSubmit(this.result);
					})
			);
	}


	onClose() {
		let { contentEl } = this;
		contentEl.empty();
	}
}*/
