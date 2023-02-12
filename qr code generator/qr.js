const inputBox = document.getElementById("qr-input");
const clearBtn = document.getElementById("clearBtn");

inputBox.addEventListener("input", function() {
  if (inputBox.value.length > 0) {
    clearBtn.style.display = "inline";
  } else {
    clearBtn.style.display = "none";
  }
});

clearBtn.addEventListener("click", function() {
  inputBox.value = "";
  clearBtn.style.display = "none";
});



const form = document.getElementById("qr-form");
const input = document.getElementById("qr-input");

async function generateQRCode(data) {
  try {
    const qrCode = await QRCode.toDataURL(data);
    const img = new Image();
    img.src = qrCode;
    // document.body.appendChild(img);
    document.getElementById('qr-output').src=img.src;
  } catch (err) {
    console.error(err);
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const data = input.value;
  generateQRCode(data);
});

