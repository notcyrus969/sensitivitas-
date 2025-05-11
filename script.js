// Theme Management
const themeToggle = document.getElementById('theme-toggle');
let currentTheme = localStorage.getItem('theme') || 'dark';

document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '🌓' : '🌑';

themeToggle.addEventListener('click', () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '🌓' : '🌑';
    currentTheme = newTheme;
});

// Database Rekomendasi
const recommendations = {
    iphone: {
        rusher: {
            general: 180,
            reddot: 170,
            scope2x: 150,
            scope4x: 90,
            desc: "Sensitivitas tinggi untuk pergerakan cepat dan flick shot di close-range."
        },
        sniper: {
            general: 70,
            reddot: 60,
            scope2x: 50,
            scope4x: 40,
            desc: "Presisi maksimal untuk headshot jarak jauh dengan kontrol stabil."
        },
        support: {
            general: 120,
            reddot: 110,
            scope2x: 90,
            scope4x: 60,
            desc: "Sensitivitas seimbang untuk membantu tim dan flanking."
        }
    },
    samsung: {
        rusher: {
            general: 160,
            reddot: 150,
            scope2x: 130,
            scope4x: 80,
            desc: "Optimasi untuk respons cepat di perangkat Samsung."
        },
        sniper: {
            general: 60,
            reddot: 50,
            scope2x: 40,
            scope4x: 30,
            desc: "Gunakan gyroscope untuk kontrol lebih halus."
        },
        support: {
            general: 100,
            reddot: 90,
            scope2x: 70,
            scope4x: 50,
            desc: "Keseimbangan sempurna untuk bermain support."
        }
    },
    redmagic: {
        rusher: {
            general: 190,
            reddot: 180,
            scope2x: 160,
            scope4x: 100,
            desc: "Perangkat gaming dengan respons maksimal untuk agresif playstyle."
        },
        sniper: {
            general: 80,
            reddot: 70,
            scope2x: 60,
            scope4x: 50,
            desc: "Presisi tinggi dengan refresh rate 144Hz."
        },
        support: {
            general: 130,
            reddot: 120,
            scope2x: 100,
            scope4x: 70,
            desc: "Dukungan maksimal untuk tim dengan kontrol penuh."
        }
    },
    oppo: {
        rusher: {
            general: 170,
            reddot: 160,
            scope2x: 140,
            scope4x: 85,
            desc: "Optimasi untuk chipset OPPO dengan ColorOS, cocok untuk close combat"
        },
        sniper: {
            general: 70,
            reddot: 60,
            scope2x: 50,
            scope4x: 40,
            desc: "Presisi tinggi untuk perangkat OPPO dengan layar AMOLED"
        }
    },
    iqoo: {
        rusher: {
            general: 185,
            reddot: 175,
            scope2x: 160,
            scope4x: 95,
            desc: "Perangkat gaming iQOO dengan touch sampling rate tinggi"
        },
        sniper: {
            general: 75,
            reddot: 65,
            scope2x: 55,
            scope4x: 45,
            desc: "Stabil untuk long-range combat di perangkat iQOO"
        }
    },
    vivo: {
        rusher: {
            general: 165,
            reddot: 155,
            scope2x: 135,
            scope4x: 80,
            desc: "Optimasi untuk Vivo Funtouch OS dengan respons cepat"
        },
        sniper: {
            general: 68,
            reddot: 58,
            scope2x: 48,
            scope4x: 38,
            desc: "Presisi untuk V-series dengan layar berkualitas"
        }
    },
    infinix: {
        rusher: {
            general: 150,
            reddot: 140,
            scope2x: 120,
            scope4x: 75,
            desc: "Setting hemat baterai untuk Infinix dengan performa cukup"
        },
        sniper: {
            general: 65,
            reddot: 55,
            scope2x: 45,
            scope4x: 35,
            desc: "Optimal untuk perangkat Infinix entry-level"
        }
    },
    poco: {
        rusher: {
            general: 190,
            reddot: 180,
            scope2x: 165,
            scope4x: 100,
            desc: "Setting extreme untuk seri POCO F/X dengan chipset Snapdragon"
        },
        sniper: {
            general: 78,
            reddot: 68,
            scope2x: 58,
            scope4x: 48,
            desc: "Presisi untuk POCO dengan refresh rate tinggi"
        }
    },
    redmi: {
        rusher: {
            general: 175,
            reddot: 165,
            scope2x: 145,
            scope4x: 90,
            desc: "Optimasi untuk Redmi Note/Series dengan performa seimbang"
        },
        sniper: {
            general: 72,
            reddot: 62,
            scope2x: 52,
            scope4x: 42,
            desc: "Stabil untuk Redmi dengan layar IPS/AMOLED"
        }
    },
    rog: {
        rusher: {
            general: 195,
            reddot: 185,
            scope2x: 170,
            scope4x: 110,
            desc: "Setting pro untuk ROG Phone dengan AirTrigger dan refresh rate 144Hz+"
        },
        sniper: {
            general: 82,
            reddot: 72,
            scope2x: 62,
            scope4x: 52,
            desc: "Presisi maksimal untuk gaming phone ASUS ROG"
        }
    },
    pixel: {
        rusher: {
            general: 160,
            reddot: 150,
            scope2x: 130,
            scope4x: 80,
            desc: "Optimasi untuk Tensor chip dengan Android stock"
        },
        sniper: {
            general: 75,
            reddot: 65,
            scope2x: 55,
            scope4x: 45,
            desc: "Stabil untuk Pixel dengan layar OLED berkualitas"
        }
    },
    xiaomi: {
        rusher: {
            general: 180,
            reddot: 170,
            scope2x: 155,
            scope4x: 95,
            desc: "Setting untuk flagship Xiaomi dengan Snapdragon 8 series"
        },
        sniper: {
            general: 80,
            reddot: 70,
            scope2x: 60,
            scope4x: 50,
            desc: "Presisi untuk Mi/Redmi flagship series"
        }
    },
    realme: {
        rusher: {
            general: 175,
            reddot: 165,
            scope2x: 145,
            scope4x: 90,
            desc: "Optimasi untuk Realme GT/Dart series dengan performa tinggi"
        },
        sniper: {
            general: 70,
            reddot: 60,
            scope2x: 50,
            scope4x: 40,
            desc: "Stabil untuk Realme dengan layar Super AMOLED"
        }
    }
};

// Daftar tips sensitivitas
const sensitivityTips = {
    general: [
        { range: "0-50", desc: "Sangat lambat - Cocok untuk sniper ekstrim." },
        { range: "51-100", desc: "Sedang - Baik untuk pemain all-round." },
        { range: "101-150", desc: "Cepat - Ideal untuk close combat." },
        { range: "151-200", desc: "Sangat cepat - Hanya untuk pro!" }
    ],
    reddot: [
        { range: "0-80", desc: "Presisi tinggi untuk headshot." },
        { range: "81-150", desc: "Seimbang antara kontrol dan kecepatan." },
        { range: "151-200", desc: "Flick shot super cepat!" }
    ],
    scope2x: [
        { range: "0-70", desc: "Stabil untuk tracking target." },
        { range: "71-140", desc: "Cukup cepat untuk mid-range." },
        { range: "141-200", desc: "Sangat cepat untuk quick-scope." }
    ],
    scope4x: [
        { range: "0-60", desc: "Presisi maksimal untuk sniper." },
        { range: "61-120", desc: "Seimbang untuk berbagai situasi." },
        { range: "121-200", desc: "Cepat untuk quick-scope jarak menengah." }
    ]
};

// Generate Rekomendasi
document.getElementById("generate-recommendation").addEventListener("click", function() {
    const device = document.getElementById("device").value;
    const role = document.getElementById("role").value;
    
    if (!recommendations[device] || !recommendations[device][role]) {
        document.getElementById("recommendation-result").innerHTML = 
            "<p>Rekomendasi belum tersedia untuk kombinasi ini. Coba pilih perangkat/role lain.</p>";
        return;
    }

    const data = recommendations[device][role];
    
    document.getElementById("recommendation-result").innerHTML = `
        <h4>Rekomendasi untuk ${role.toUpperCase()}:</h4>
        <ul>
            <li><strong>Lihat Sekeliling:</strong> ${data.general}</li>
            <li><strong>Red Dot:</strong> ${data.reddot}</li>
            <li><strong>Scope 2x:</strong> ${data.scope2x}</li>
            <li><strong>Scope 4x:</strong> ${data.scope4x}</li>
        </ul>
        <p>💡 <em>${data.desc}</em></p>
        <button id="apply-settings">Terapkan Setting</button>
    `;

    // Apply settings button
    document.getElementById("apply-settings")?.addEventListener("click", function() {
        applySettings(data);
        alert("Setting telah diterapkan!");
    });
});

// Apply settings function
function applySettings(data) {
    document.getElementById("general").value = data.general;
    document.getElementById("reddot").value = data.reddot;
    document.getElementById("scope2x").value = data.scope2x;
    document.getElementById("scope4x").value = data.scope4x;
    
    // Update displayed values
    document.getElementById("general-value").textContent = data.general;
    document.getElementById("reddot-value").textContent = data.reddot;
    document.getElementById("scope2x-value").textContent = data.scope2x;
    document.getElementById("scope4x-value").textContent = data.scope4x;
    
    // Update feedback
    updateFeedback("general", data.general);
    updateFeedback("reddot", data.reddot);
    updateFeedback("scope2x", data.scope2x);
    updateFeedback("scope4x", data.scope4x);
}

// Slider functionality
function setupSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    const valueDisplay = document.getElementById(`${sliderId}-value`);
    const feedbackBox = document.getElementById(`${sliderId}-feedback`);

    slider.addEventListener("input", function() {
        valueDisplay.textContent = this.value;
        updateFeedback(sliderId, this.value);
    });
}

// Update feedback based on value
function updateFeedback(sliderId, value) {
    const tips = sensitivityTips[sliderId] || sensitivityTips.general;
    let feedback = "";
    
    if (sliderId === "general") {
        if (value <= 50) feedback = tips[0].desc;
        else if (value <= 100) feedback = tips[1].desc;
        else if (value <= 150) feedback = tips[2].desc;
        else feedback = tips[3].desc;
    } 
    else if (sliderId === "reddot") {
        if (value <= 80) feedback = tips[0].desc;
        else if (value <= 150) feedback = tips[1].desc;
        else feedback = tips[2].desc;
    }
    else if (sliderId === "scope2x") {
        if (value <= 70) feedback = tips[0].desc;
        else if (value <= 140) feedback = tips[1].desc;
        else feedback = tips[2].desc;
    }
    else if (sliderId === "scope4x") {
        if (value <= 60) feedback = tips[0].desc;
        else if (value <= 120) feedback = tips[1].desc;
        else feedback = tips[2].desc;
    }

    document.getElementById(`${sliderId}-feedback`).textContent = feedback;
}

// Initialize sliders
setupSlider("general");
setupSlider("reddot");
setupSlider("scope2x");
setupSlider("scope4x");

// Save settings
document.getElementById("save-btn").addEventListener("click", function() {
    const general = document.getElementById("general").value;
    const reddot = document.getElementById("reddot").value;
    const scope2x = document.getElementById("scope2x").value;
    const scope4x = document.getElementById("scope4x").value;
    
    document.getElementById("saved-settings").innerHTML = `
        <p>Settings Tersimpan:</p>
        <ul>
            <li>Lihat Sekeliling: ${general}</li>
            <li>Red Dot: ${reddot}</li>
            <li>Scope 2x: ${scope2x}</li>
            <li>Scope 4x: ${scope4x}</li>
        </ul>
        <p>Terakhir disimpan: ${new Date().toLocaleString()}</p>
    `;
    
    // Save to localStorage
    localStorage.setItem("savedSettings", JSON.stringify({
        general, reddot, scope2x, scope4x,
        savedAt: new Date().toISOString()
    }));
});

// Load saved settings
function loadSettings() {
    const saved = localStorage.getItem("savedSettings");
    if (saved) {
        const settings = JSON.parse(saved);
        applySettings(settings);
        
        document.getElementById("saved-settings").innerHTML = `
            <p>Settings Tersimpan:</p>
            <ul>
                <li>Lihat Sekeliling: ${settings.general}</li>
                <li>Red Dot: ${settings.reddot}</li>
                <li>Scope 2x: ${settings.scope2x}</li>
                <li>Scope 4x: ${settings.scope4x}</li>
            </ul>
            <p>Terakhir disimpan: ${new Date(settings.savedAt).toLocaleString()}</p>
        `;
    }
}

// Load settings when page loads
window.addEventListener("DOMContentLoaded", () => {
    loadSettings();
});