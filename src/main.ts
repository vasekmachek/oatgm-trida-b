import "./style.css";
import { APP } from "./app";

document.querySelector<HTMLHeadingElement>("#name")!.textContent = APP.name;
document.querySelector<HTMLParagraphElement>("#tagline")!.textContent = APP.tagline;
