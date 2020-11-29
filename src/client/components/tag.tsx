import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ITagProps {
  to: string;
  label: string;
  color: string;
  icon?: IconProp;
}

function icon(name?: IconProp) {
  if (name) {
    return <FontAwesomeIcon icon={name} size="sm" className="mr-2" />;
  } else {
    return "";
  }
}

export function Tag(props: ITagProps) {
  return (
    <Link
      to={props.to}
      className={`tag focus mr-1 bg-gray-300 hover:text-font-bold hover:bg-gray-200`}
      aria-label={props.label}>
      <span className="flex items-center" role="presentation" aria-hidden="true">
        {icon(props.icon)}
        <span className="uppercase text-sm">{props.label}</span>
      </span>
    </Link>
  );
}
