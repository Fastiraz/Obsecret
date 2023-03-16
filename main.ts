import { Plugin, MarkdownRenderer, App, Modal, Setting, Notice, addIcon } from 'obsidian';

export default class SecretBlock extends Plugin {
	public res: string;
	public password = "e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4";

	async onload() {
		// This 
		this.registerMarkdownCodeBlockProcessor("secret-block", (source, el, _) => {
			const container = el.createEl("div");
			container.className = "secret";

			const rows = source.split("\n");
			for (let row of rows)
				container.createEl("div", { text: row });

			container.addEventListener("click", () => {
				if (container.className === "secret") {
					callback: () => this.openModal();
					if (this.res === this.password) {
						container.className = "secret-show";
						new Notice("The content is no longer hidden.");
					} else {
						container.className = "secret";
						new Notice('Invalid password!');
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
			new Notice(`Password entered: ${this.res}`);
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
