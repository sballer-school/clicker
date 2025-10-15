import exampleIconUrl from "./noun-paperclip-7598668-00449F.png";
import "./style.css";

document.body.innerHTML = `
  <p>Example image asset: <img src="${exampleIconUrl}" class="icon" /></p>
`;

const primaryBook = document.createElement("button");
primaryBook.textContent = "📖";
document.body.appendChild(primaryBook);
