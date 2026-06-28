// Email šabloni za Resend

function formatPrice(rsd: number): string {
  return new Intl.NumberFormat('sr-RS').format(rsd) + ' RSD';
}

interface BookingEmailData {
  booking_number: string; guest_name: string; guest_email: string;
  date: string; package_name: string; num_guests: number; addons: string[];
  total_rsd: number; deposit_rsd: number; remaining_rsd: number;
}

export function guestConfirmationEmail(data: BookingEmailData): { subject: string; html: string } {
  const dateFormatted = new Date(data.date + 'T00:00:00').toLocaleDateString('sr-RS', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  return {
    subject: `✅ Potvrda rezervacije ${data.booking_number}`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
body{font-family:Inter,sans-serif;background:#F7F2EA;margin:0;padding:20px}
.card{background:white;max-width:500px;margin:0 auto;border-radius:4px;overflow:hidden}
.header{background:#5C1A2E;color:white;padding:32px 28px}
.header h1{font-family:Georgia,serif;font-size:24px;font-weight:500;margin:0 0 4px}
.header p{color:rgba(255,255,255,.7);font-size:13px;margin:0}
.body{padding:28px}
.row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #EDE8E0;font-size:14px}
.row .label{color:#8A7E72}.row .value{font-weight:600;color:#1C1C1E}
.price-box{background:#EDE8E0;border-radius:4px;padding:16px;margin:20px 0}
.price-row{display:flex;justify-content:space-between;font-size:14px;margin-bottom:6px}
.price-total{font-weight:700;font-size:16px;color:#5C1A2E}
.footer{background:#1C1C1E;color:rgba(255,255,255,.5);padding:20px 28px;font-size:12px}
</style></head><body>
<div class="card">
<div class="header"><h1>Rezervacija potvrđena 🎉</h1><p>Broj: ${data.booking_number}</p></div>
<div class="body">
<p style="color:#1C1C1E;font-size:15px">Poštovani ${data.guest_name},</p>
<p style="color:#8A7E72;font-size:14px;line-height:1.6">Vaša rezervacija je potvrđena! Jedva čekamo da vas ugostimo.</p>
<div class="row"><span class="label">📅 Datum</span><span class="value">${dateFormatted}</span></div>
<div class="row"><span class="label">🎁 Program</span><span class="value">${data.package_name}</span></div>
<div class="row"><span class="label">👥 Gosti</span><span class="value">${data.num_guests} osoba</span></div>
${data.addons.length > 0 ? `<div class="row"><span class="label">✨ Dodaci</span><span class="value">${data.addons.join(', ')}</span></div>` : ''}
<div class="price-box">
<div class="price-row"><span>Ukupno</span><span>${formatPrice(data.total_rsd)}</span></div>
<div class="price-row price-total"><span>✅ Depozit plaćen</span><span>${formatPrice(data.deposit_rsd)}</span></div>
<div class="price-row" style="color:#8A7E72"><span>Na mestu</span><span>${formatPrice(data.remaining_rsd)}</span></div>
</div>
<p style="font-size:13px;color:#8A7E72">📍 Vrdnik, Fruška Gora<br>📞 +381 XX XXX XXXX</p>
</div>
<div class="footer">Napolitana Lab Vrdnik · Fruška Gora<br>U saradnji sa picerijom Majstor i Margarita</div>
</div></body></html>`,
  };
}

export function adminNotificationEmail(data: BookingEmailData): { subject: string; html: string } {
  return {
    subject: `🆕 Nova rezervacija — ${data.booking_number} (${data.date}, ${data.num_guests} gosta)`,
    html: `<h2>Nova rezervacija</h2>
<p><strong>Broj:</strong> ${data.booking_number}</p>
<p><strong>Datum:</strong> ${data.date}</p>
<p><strong>Paket:</strong> ${data.package_name}</p>
<p><strong>Gosti:</strong> ${data.num_guests}</p>
<hr><p><strong>Gost:</strong> ${data.guest_name}</p>
<p><strong>Email:</strong> ${data.guest_email}</p>
<hr><p><strong>Ukupno:</strong> ${formatPrice(data.total_rsd)}</p>
<p><strong>Depozit plaćen:</strong> ${formatPrice(data.deposit_rsd)} ✅</p>`,
  };
}
