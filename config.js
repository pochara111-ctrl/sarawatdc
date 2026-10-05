// ===== ตั้งค่าเว็บ =====
const API_URL = 'https://script.google.com/macros/s/AKfycbxQpKRlYoeM9u8epd6U-sDHZp3QMddu7q0vyyC61toIhWdex5SiebhTSXot-lawS_A/exec';           // URL ลงท้าย /exec ที่ได้หลัง Deploy
const SCHOOL = { lat: 6.8695, lng: 101.2505, zoom: 18 }; // พิกัดโรงเรียน (แก้เป็นของจริง)

async function api(action, data = {}) {
  const r = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action, ...data }) });
  const j = await r.json();
  if (!j.ok) throw new Error(j.error || 'error');
  return j;
}
