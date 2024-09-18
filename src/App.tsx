// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const modelViewer = document.getElementById("model-viewer");
    console.log(modelViewer, "modelViewer");
    if (modelViewer) {
      modelViewer.style.width = "100dvw";
      modelViewer.style.height = "100dvh";
      modelViewer.style.backgroundColor = "#eee";
      modelViewer.ar = true;
      modelViewer.addEventListener("error", (e) =>
        console.log(`Error: ${JSON.stringify(e)}`)
      );

      modelViewer.addEventListener("load", async () => {
        const texture = await modelViewer.createTexture("/texture.jpg");
        modelViewer.model.materials.map((material) => {
          material.pbrMetallicRoughness["baseColorTexture"].setTexture(texture);
        });
      });

      modelViewer.addEventListener("ar-status", (e) =>
        console.log(`AR-Status: ${JSON.stringify(e)}`)
      );
    }
  }, []);

  return (
    <div id="canvas-container">
      <model-viewer
        id={"model-viewer"}
        alt="Phone case"
        src="iphone_case.glb"
        ar
        shadow-intensity="1"
        camera-controls
      />
    </div>
  );
}

export default App;
