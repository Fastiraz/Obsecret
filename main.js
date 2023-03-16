/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => SecretBlock
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var SecretBlock = class extends import_obsidian.Plugin {
  async onload() {
    this.registerMarkdownCodeBlockProcessor("secret-block", (source, el, _) => {
      const container = el.createEl("div");
      container.className = "secret";
      const rows = source.split("\n");
      for (let row of rows)
        container.createEl("div", { text: row });
      container.addEventListener("click", () => {
        if (container.className === "secret") {
          new PassModal(this.app, (result) => {
            container.className = "secret-show";
            new import_obsidian.Notice(`Password: ${result}`);
            new import_obsidian.Notice("The content is no longer hidden.");
          }).open();
        }
      });
      container.addEventListener("dblclick", () => {
        if (container.className === "secret-show") {
          container.className = "secret";
          new import_obsidian.Notice("The content has been hidden.");
        }
      });
    });
  }
};
var PassModal = class extends import_obsidian.Modal {
  constructor(app, onSubmit) {
    super(app);
    this.onSubmit = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h1", { text: "Enter your password to read that." });
    new import_obsidian.Setting(contentEl).setName("Password").addText((text) => text.onChange((value) => {
      this.result = value;
    }));
    new import_obsidian.Setting(contentEl).addButton((btn) => btn.setButtonText("Submit").setCta().onClick(() => {
      this.close();
      this.onSubmit(this.result);
    }));
  }
  onClose() {
    let { contentEl } = this;
    contentEl.empty();
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgUGx1Z2luLCBNYXJrZG93blJlbmRlcmVyLCBBcHAsIE1vZGFsLCBTZXR0aW5nLCBOb3RpY2UsIGFkZEljb24gfSBmcm9tICdvYnNpZGlhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3JldEJsb2NrIGV4dGVuZHMgUGx1Z2luIHtcblx0YXN5bmMgb25sb2FkKCkge1xuXHRcdC8vIFRoaXMgXG5cdFx0dGhpcy5yZWdpc3Rlck1hcmtkb3duQ29kZUJsb2NrUHJvY2Vzc29yKFwic2VjcmV0LWJsb2NrXCIsIChzb3VyY2UsIGVsLCBfKSA9PiB7XG5cdFx0XHRjb25zdCBjb250YWluZXIgPSBlbC5jcmVhdGVFbChcImRpdlwiKTtcblx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNlY3JldFwiO1xuXG5cdFx0XHRjb25zdCByb3dzID0gc291cmNlLnNwbGl0KFwiXFxuXCIpO1xuXHRcdFx0Zm9yIChsZXQgcm93IG9mIHJvd3MpXG5cdFx0XHRcdGNvbnRhaW5lci5jcmVhdGVFbChcImRpdlwiLCB7IHRleHQ6IHJvdyB9KTtcblxuXHRcdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdGlmIChjb250YWluZXIuY2xhc3NOYW1lID09PSBcInNlY3JldFwiKSB7XG5cdFx0XHRcdFx0LyogRElTUExBWSBUSEUgTU9EQUwgSEVSRSAqL1xuXHRcdFx0XHRcdC8vY29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2VjcmV0LXNob3dcIjtcblx0XHRcdFx0XHRuZXcgUGFzc01vZGFsKHRoaXMuYXBwLCAocmVzdWx0KSA9PiB7XG5cdFx0XHRcdFx0XHRjb250YWluZXIuY2xhc3NOYW1lID0gXCJzZWNyZXQtc2hvd1wiO1xuXHRcdFx0XHRcdFx0bmV3IE5vdGljZShgUGFzc3dvcmQ6ICR7cmVzdWx0fWApO1xuXHRcdFx0XHRcdFx0bmV3IE5vdGljZSgnVGhlIGNvbnRlbnQgaXMgbm8gbG9uZ2VyIGhpZGRlbi4nKTtcblx0XHRcdFx0XHR9KS5vcGVuKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0aWYgKGNvbnRhaW5lci5jbGFzc05hbWUgPT09IFwic2VjcmV0LXNob3dcIikge1xuXHRcdFx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNlY3JldFwiO1xuXHRcdFx0XHRcdG5ldyBOb3RpY2UoJ1RoZSBjb250ZW50IGhhcyBiZWVuIGhpZGRlbi4nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHR9KTtcblx0fVxufVxuXG5jbGFzcyBQYXNzTW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG5cdHJlc3VsdDogc3RyaW5nO1xuXHRvblN1Ym1pdDogKHJlc3VsdDogc3RyaW5nKSA9PiB2b2lkO1xuXG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwLCBvblN1Ym1pdDogKHJlc3VsdDogc3RyaW5nKSA9PiB2b2lkKSB7XG5cdFx0c3VwZXIoYXBwKTtcblx0XHR0aGlzLm9uU3VibWl0ID0gb25TdWJtaXQ7XG5cdH1cblxuXHRvbk9wZW4oKSB7XG5cdFx0Y29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG5cblx0XHRjb250ZW50RWwuY3JlYXRlRWwoXCJoMVwiLCB7IHRleHQ6IFwiRW50ZXIgeW91ciBwYXNzd29yZCB0byByZWFkIHRoYXQuXCIgfSk7XG5cblx0XHRuZXcgU2V0dGluZyhjb250ZW50RWwpXG5cdFx0XHQuc2V0TmFtZShcIlBhc3N3b3JkXCIpXG5cdFx0XHQuYWRkVGV4dCgodGV4dCkgPT5cblx0XHRcdFx0dGV4dC5vbkNoYW5nZSgodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlc3VsdCA9IHZhbHVlXG5cdFx0XHRcdH0pKTtcblxuXHRcdG5ldyBTZXR0aW5nKGNvbnRlbnRFbClcblx0XHRcdC5hZGRCdXR0b24oKGJ0bikgPT5cblx0XHRcdFx0YnRuXG5cdFx0XHRcdFx0LnNldEJ1dHRvblRleHQoXCJTdWJtaXRcIilcblx0XHRcdFx0XHQuc2V0Q3RhKClcblx0XHRcdFx0XHQub25DbGljaygoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLm9uU3VibWl0KHRoaXMucmVzdWx0KTtcblx0XHRcdFx0XHR9KSk7XG5cdH1cblxuXHRvbkNsb3NlKCkge1xuXHRcdGxldCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcblx0XHRjb250ZW50RWwuZW1wdHkoKTtcblx0fVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUErRTtBQUUvRSxJQUFxQixjQUFyQixjQUF5Qyx1QkFBTztBQUFBLEVBQy9DLE1BQU0sU0FBUztBQUVkLFNBQUssbUNBQW1DLGdCQUFnQixDQUFDLFFBQVEsSUFBSSxNQUFNO0FBQzFFLFlBQU0sWUFBWSxHQUFHLFNBQVMsS0FBSztBQUNuQyxnQkFBVSxZQUFZO0FBRXRCLFlBQU0sT0FBTyxPQUFPLE1BQU0sSUFBSTtBQUM5QixlQUFTLE9BQU87QUFDZixrQkFBVSxTQUFTLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQztBQUV4QyxnQkFBVSxpQkFBaUIsU0FBUyxNQUFNO0FBQ3pDLFlBQUksVUFBVSxjQUFjLFVBQVU7QUFHckMsY0FBSSxVQUFVLEtBQUssS0FBSyxDQUFDLFdBQVc7QUFDbkMsc0JBQVUsWUFBWTtBQUN0QixnQkFBSSx1QkFBTyxhQUFhLFFBQVE7QUFDaEMsZ0JBQUksdUJBQU8sa0NBQWtDO0FBQUEsVUFDOUMsQ0FBQyxFQUFFLEtBQUs7QUFBQSxRQUNUO0FBQUEsTUFDRCxDQUFDO0FBRUQsZ0JBQVUsaUJBQWlCLFlBQVksTUFBTTtBQUM1QyxZQUFJLFVBQVUsY0FBYyxlQUFlO0FBQzFDLG9CQUFVLFlBQVk7QUFDdEIsY0FBSSx1QkFBTyw4QkFBOEI7QUFBQSxRQUMxQztBQUFBLE1BQ0QsQ0FBQztBQUFBLElBRUYsQ0FBQztBQUFBLEVBQ0Y7QUFDRDtBQUVBLElBQU0sWUFBTixjQUF3QixzQkFBTTtBQUFBLEVBSTdCLFlBQVksS0FBVSxVQUFvQztBQUN6RCxVQUFNLEdBQUc7QUFDVCxTQUFLLFdBQVc7QUFBQSxFQUNqQjtBQUFBLEVBRUEsU0FBUztBQUNSLFVBQU0sRUFBRSxVQUFVLElBQUk7QUFFdEIsY0FBVSxTQUFTLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXRFLFFBQUksd0JBQVEsU0FBUyxFQUNuQixRQUFRLFVBQVUsRUFDbEIsUUFBUSxDQUFDLFNBQ1QsS0FBSyxTQUFTLENBQUMsVUFBVTtBQUN4QixXQUFLLFNBQVM7QUFBQSxJQUNmLENBQUMsQ0FBQztBQUVKLFFBQUksd0JBQVEsU0FBUyxFQUNuQixVQUFVLENBQUMsUUFDWCxJQUNFLGNBQWMsUUFBUSxFQUN0QixPQUFPLEVBQ1AsUUFBUSxNQUFNO0FBQ2QsV0FBSyxNQUFNO0FBQ1gsV0FBSyxTQUFTLEtBQUssTUFBTTtBQUFBLElBQzFCLENBQUMsQ0FBQztBQUFBLEVBQ047QUFBQSxFQUVBLFVBQVU7QUFDVCxRQUFJLEVBQUUsVUFBVSxJQUFJO0FBQ3BCLGNBQVUsTUFBTTtBQUFBLEVBQ2pCO0FBQ0Q7IiwKICAibmFtZXMiOiBbXQp9Cg==
