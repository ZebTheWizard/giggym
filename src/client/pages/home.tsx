import React from "react";
import { Helmet } from "react-helmet";
import { ChallengeCard, Grid } from "../components";
import { IChallengeSchema, fillChallengeSchema } from "../schemas/Challenge";
import { firestore } from "../providers/FirebaseProvider";
import { useAsyncData } from "../helpers";

interface IAsyncData {
  challenges: IChallengeSchema[];
}

function renderChallenges(challenges: IChallengeSchema[] = [], loading: boolean) {
  if (loading) {
    return <h1>LOADING...</h1>;
  } else {
    return challenges.map((challenge, i) => <ChallengeCard key={i} challenge={challenge} />);
  }
}

Home.asyncData = async (): Promise<IAsyncData> => {
  const data = await firestore().collection("challenges").get();
  const challenges = data.docs.map((doc) => fillChallengeSchema(doc));

  return { challenges };
};

export function Home(props: IAsyncData) {
  const { data, loading } = useAsyncData<IAsyncData>(props, Home.asyncData);
  return (
    <div>
      <Helmet>
        <title>Gig Gym | Home</title>
      </Helmet>
      <Grid aria-label="Challenges Feed" spacing={{ x: 3, y: 3 }}>
        {renderChallenges(data?.challenges, loading)}
      </Grid>
    </div>
  );
}
