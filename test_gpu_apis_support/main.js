async function detect_webgpu() {
    let webgpu = document.getElementById("webgpu_support");
    if (navigator.gpu) {
        const adapter = await navigator.gpu.requestAdapter();
        if (adapter) {
            webgpu.textContent += "Supported";
        } else {
            webgpu.textContent += "Not supported";
        }
    } else {

        webgpu.textContent += "Not supported";
    }
}

async function detect_webgl1() {
    let webgl1 = document.getElementById("webgl1_support");

    if (window.WebGLRenderingContext) {
        let canvas = document.createElement("canvas");
        if (canvas.getContext("webgl")) {
            webgl1.textContent += "Supported";
        } else {
            webgl1.textContent += "Not supported"
        }
    } else {
        webgl1.textContent += "Not supported"
    };
}

function detect_webgl2() {
    let webgl2 = document.getElementById("webgl2_support");

    if (window.WebGL2RenderingContext) {
        let canvas = document.createElement("canvas");
        if (canvas.getContext("webgl2")) {
            webgl2.textContent += "Supported";
        } else {
            webgl2.textContent += "Not supported";
        }
    } else {
        webgl2.textContent += "Not supported";
    }
}

detect_webgpu().catch(err => {
    let webgpu = document.getElementById("webgpu_support");
    webgpu.textContent += "Not supported";
});
detect_webgl2();
detect_webgl1();

