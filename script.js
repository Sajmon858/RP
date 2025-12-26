// 🔴 WKLEJ SWOJE WEBHOOKI DO KONKRETNYCH KANAŁÓW 🔴
const WEBHOOK_LAPD = "https://discord.com/api/webhooks/1454064181497303052/MExKj_IytoUwQhMii00XiM8b70y2sQn-S_3hh5DY8G6-nVp_o_A5bTWxYptM1myXiLkp";
const WEBHOOK_DOJ  = "TU_WKLEJ_WEBHOOK_KANAL_DOJ";
const WEBHOOK_ADMIN = "https://discord.com/api/webhooks/1454064177680482436/OOrPMSwobzozjTZuWd1GkgWSNCkbdAK-E1kAzP4CKNjZd9cz2U1jwr0TVZBcv1EADUca";

// ================= LAPD =================
function wyslijMandat() {
  send(WEBHOOK_LAPD, `🚔 MANDAT\nObywatel: ${mandat_obywatel.value}\nKwota: ${mandat_kwota.value}\nPowód: ${mandat_powod.value}`);
}
function wyslijPoszukiwanie() {
  send(WEBHOOK_LAPD, `🔍 POSZUKIWANIE\nObywatel: ${posz_obywatel.value}\nPowód: ${posz_powod.value}`);
}
function wyslijKod() {
  send(WEBHOOK_LAPD, `🚨 KOD NA MIASTO\n${kod_nazwa.value}\n${kod_opis.value}`);
}

// ================= DOJ =================
function wyslijWyrokDOJ() {
  send(WEBHOOK_DOJ, `⚖️ WYROK DOJ\nObywatel: ${doj_obywatel.value}\nWyrok: ${doj_wyrok.value}\nGrzywna: ${doj_grzywna.value}`);
}
function wyslijPoszDOJ() {
  send(WEBHOOK_DOJ, `🔍 POSZUKIWANIE DOJ\nObywatel: ${doj_posz_obywatel.value}\nPowód: ${doj_posz_powod.value}`);
}

// ================= ADMIN =================
function wyslijAdmin() {
  send(WEBHOOK_ADMIN, `🛡️ DECYZJA ADMINISTRACYJNA\nObywatel: ${admin_obywatel.value}\nDecyzja: ${admin_decyzja.value}`);
}

// ================= FUNKCJA WYSYŁANIA =================
function send(webhook, text) {
  fetch(webhook, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ content: text })
  });
}
