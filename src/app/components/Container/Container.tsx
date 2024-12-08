import { BorderBeam } from "@/components/ui/border-beam";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export function Container({children,props}:{children:React.ReactNode,props:{type:string}}) {
  return (
    <div className="relative rounded-xl">
      {children}

      {props.type === "border" && (
        <BorderBeam size={250} duration={12} delay={9} />
      )}
      {props.type === "dot" && (
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,black,transparent)]"
          )}
        />
      )}
    </div>
  );
}
