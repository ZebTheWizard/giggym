import * as faker from "faker";

export interface IChallengeSchema {
  title: string;
  description: string;
  uid?: string;
  difficulty: number;
  skillsRequired: string[];
  milestonesCount: number;
  completedMilestonesCount: number;
  xp: number;
  submissionCount: number;
  viewCount: number;
  color: string;
}

function randomSkill(amount: number): string[] {
  const res: string[] = [];
  for (let i = 0; i <= faker.random.number({ max: amount, min: 1 }); i++) {
    res.push(
      faker.random.arrayElement<string>([
        "html5",
        "react",
        "vuejs",
        "git",
        "docker",
        "angularjs",
        "typescript",
        "electron",
        "mysql",
        "python",
      ])
    );
  }
  return res;
}

export function defaultChallengeSchema(): IChallengeSchema {
  return {
    title: faker.lorem.words(3),
    description: faker.lorem.words(12),
    uid: faker.random.uuid(),
    difficulty: faker.random.number({ max: 4, min: 0 }),
    skillsRequired: randomSkill(3),
    milestonesCount: 3,
    completedMilestonesCount: 1,
    xp: 9,
    submissionCount: 17,
    viewCount: 213,
    color: "green",
  };
}

export function fillChallengeSchema(
  doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
): IChallengeSchema {
  let defaults = {
    title: "Lorem",
    description:
      "est molestiae aliquid ut autem consequuntur facilis harum necessitatibus accusantium ipsum harum aspernatur recusandae ab et est temporibus alias nihil",
    uid: faker.random.uuid(),
    difficulty: 0,
    skillsRequired: ["html5"],
    milestonesCount: 3,
    completedMilestonesCount: 1,
    xp: 9,
    submissionCount: 17,
    viewCount: 213,
    color: "green",
  };
  if (doc != null) {
    defaults = {
      ...defaults,
      ...(doc.data() as IChallengeSchema),
      uid: doc.id,
    };
  }
  return defaults;
}
