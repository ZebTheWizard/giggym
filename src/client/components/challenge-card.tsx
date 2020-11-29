import React from "react";
import { Aspect } from ".";
import { IChallengeSchema } from "../schemas/Challenge";
import { list_to_english, pluralize } from "../helpers";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChallengeImage } from "./challenge-image";
import { SkillLevel } from "./skill-level";
import ClampLines from "react-clamp-lines";

export interface IChallengeCardProps {
  challenge: IChallengeSchema;
}

function ChallengeAriaDetails(props: IChallengeCardProps) {
  const challenge = props.challenge;
  const $details = "challenge-details-" + challenge.uid;
  return (
    <details className="hidden" id={$details}>
      <summary>{challenge.title}</summary>
      <p>
        This challenge mainly covers {pluralize(challenge.skillsRequired.length, "skill")};{" "}
        {list_to_english(challenge.skillsRequired)}. Upon completing this level{" "}
        {challenge.difficulty} challenge, which has{" "}
        {pluralize(challenge.milestonesCount, "milestone")}, you will
        {pluralize(challenge.xp, "experience point")}
      </p>
      <p>{challenge.description}</p>
    </details>
  );
}

export function ChallengeCard(props: IChallengeCardProps) {
  const challenge = props.challenge;
  const $details = "challenge-details-" + challenge.uid;
  return (
    <Aspect label="ChallengeCard">
      <div
        className="challenge-card focus rounded-xl select-none"
        aria-details={$details}
        aria-describedby={$details}
        role="link"
        tabIndex={0}>
        <ChallengeAriaDetails challenge={challenge} />
        <div
          aria-hidden={true}
          className="rounded-t-xl overflow-hidden bg-black"
          style={{ flexBasis: "50%" }}>
          <ChallengeImage skills={challenge.skillsRequired} />
        </div>
        <div
          className="flex flex-col justify-between bg-gray-400 p-3 rounded-b-xl"
          aria-hidden="true"
          style={{ flexBasis: "50%" }}>
          <SkillLevel level={challenge.difficulty} />

          <div>
            <div className="font-bold text-font-bold">{challenge.title}</div>
            <ClampLines
              id={`challenge-${challenge.uid}`}
              className="text-sm text-font-muted"
              text={challenge.description}
              lines={2}
              buttons={false}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="ml-2 flex-grow flex justify-between items-center -mt-2 mr-6">
              {/* challenge stats icons */}
            </div>
          </div>

          <Link
            to={`/challenge/${challenge.uid}`}
            className="bg-accent hover:bg-accent-bright focus:bg-accent-bright focus text-black btn"
            tabIndex={-1}>
            View
            <FontAwesomeIcon icon="chevron-right" className="ml-1" />
          </Link>
        </div>
      </div>
    </Aspect>
  );
}
