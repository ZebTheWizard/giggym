import React from "react";

export interface ISkillLevelProps extends React.PropsWithoutRef<any> {
  level: SkillLevels;
}

export const SkillLevelColors: string[] = ["blue", "green", "purple", "orange", "red"];

export enum SkillLevels {
  Beginner,
  Novice,
  Itern,
  Pro,
  Expert,
}

export function SkillLevel(props: ISkillLevelProps) {
  return (
    <div role="presentation" aria-hidden="true">
      <div className="text-xs uppercase font-bold text-muted">{SkillLevels[props.level]}</div>
      <div className="flex">
        {SkillLevelColors.map((key, index) => (
          <div
            key={key}
            className={`py-1 flex-grow rounded-full mr-1 bg-gray-200 ${
              props.level >= index ? `bg-${SkillLevelColors[props.level]}` : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
