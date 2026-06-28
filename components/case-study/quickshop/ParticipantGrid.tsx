import type { QuickShopParticipant } from "@/lib/quickshop-data";

const AVATAR_COLORS = [
  "bg-soft-pink text-black",
  "bg-[#FFE4D6] text-black",
  "bg-[#E8DEFF] text-black",
  "bg-cream text-black",
  "bg-[#E8F3E8] text-black",
  "bg-[#E8F8F7] text-black",
];

function participantInitial(id: string) {
  return id.replace("Participant ", "").padStart(2, "0");
}

export default function ParticipantGrid({
  intro,
  participants,
}: {
  intro: string;
  participants: QuickShopParticipant[];
}) {
  return (
    <div>
      <p className="max-w-3xl text-base leading-relaxed text-black md:text-lg">
        {intro}
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {participants.map((participant, index) => (
          <li
            key={participant.id}
            className="rounded-2xl border border-border bg-white p-5 md:p-6"
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}
                aria-hidden
              >
                {participantInitial(participant.id)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-grey">
                  {participant.id}
                </p>
                <dl className="mt-3 space-y-2 text-sm leading-relaxed text-black">
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-grey">
                      Segment
                    </dt>
                    <dd className="mt-1">{participant.segment}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-grey">
                      Indicative basket
                    </dt>
                    <dd className="mt-1">{participant.basket}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-grey">
                      Shopping responsibility
                    </dt>
                    <dd className="mt-1">{participant.responsibility}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-grey">
                      Online grocery experience
                    </dt>
                    <dd className="mt-1">{participant.experience}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
