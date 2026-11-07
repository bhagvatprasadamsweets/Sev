export default function AnnouncementBar({ text = "AUTHENTIC SEV COLLECTION   AALOO SEV   RATLAMI SEV   SPECIAL BESAN SEV   100% PURE SING TEL   BHAGVAT PRASADAM" }) {
  return (
    <div className="bg-[#B83220] text-white py-2 px-4 text-center text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 overflow-hidden shadow-sm">
      <span className="truncate">{text}</span>
    </div>
  );
}
