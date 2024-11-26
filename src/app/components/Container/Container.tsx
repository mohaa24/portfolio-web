import { BorderBeam } from "@/components/ui/border-beam";

export function Container({children}) {
  return (
    <div className="relative rounded-xl">
      {children}
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
