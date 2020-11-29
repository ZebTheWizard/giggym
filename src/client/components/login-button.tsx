import React, { useState } from "react";
import { Aspect } from "./aspect";
import ContentLoader from "react-content-loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth, IAuthUser } from "../providers";
import { Link } from "react-router-dom";

export interface IProfileLink {
  link: string;
}
export interface IProfileLinks {
  [label: string]: IProfileLink;
}

interface IUserBasedProps extends React.PropsWithChildren<any> {
  user?: IAuthUser;
  checkedAuth?: boolean;
  onLogout?: (e: React.MouseEvent) => void;
  onLogin?: (e: React.MouseEvent) => void;
  links?: IProfileLinks;
}

interface IButtonTextProps extends IUserBasedProps {
  label: string;
}

function LoginButtonHolder({ children, ...props }: React.PropsWithChildren<any>) {
  return (
    <button className="rounded-lg focus" {...props}>
      <span
        className="flex items-center rounded-lg text-font-bold"
        role="presentation"
        aria-hidden="true">
        {children}
      </span>
    </button>
  );
}

function AvatarHolder(props: React.PropsWithChildren<any>) {
  return (
    <Aspect width="40px" className="bg-gray-300 hover:bg-gray-200 rounded-lg overflow-hidden">
      {props.children}
    </Aspect>
  );
}

function ButtonText(props: IButtonTextProps) {
  let content;
  if (props.checkedAuth) {
    content = <span>{props.label}</span>;
  } else {
    content = (
      <ContentLoader
        speed={2}
        width={110}
        height={10}
        viewBox="0 0 110 10"
        style={{ width: "100%" }}
        backgroundColor="var(--white)"
        foregroundColor="var(--gray-300)">
        <circle cx="5" cy="5" r="5" />
        <rect x="5" y="0" rx="0" ry="0" width="100" height="10" />
        <circle cx="105" cy="5" r="5" />
      </ContentLoader>
    );
  }
  return (
    <span className="text-sm uppercase text-center px-3" style={{ width: "90px" }}>
      {content}
    </span>
  );
}

function GitHubLogo(props: IUserBasedProps) {
  if (props.checkedAuth) {
    return <FontAwesomeIcon icon={["fab", "github-alt"]} size="lg" />;
  } else {
    return <FontAwesomeIcon icon={["fas", "spinner-third"]} size="lg" spin={true} />;
  }
}

function ProfilePicture(props: IUserBasedProps) {
  if (props.user?.photoURL) {
    return (
      <img
        src={props.user.photoURL}
        alt="GitHub profile picture"
        className="rounded-l-lg"
        width="40px"
      />
    );
  } else {
    return <span className="font-bold">?</span>;
  }
}

function AuthenticatedButton(props: IUserBasedProps) {
  if (props.user) {
    return (
      <LoginButtonHolder
        onClick={props.onClick}
        aria-label="Show profile links"
        aria-checked={props["aria-checked"]}>
        <AvatarHolder>
          <ProfilePicture user={props.user} />
        </AvatarHolder>
        <ButtonText label="Profile" checkedAuth={props.checkedAuth} />
      </LoginButtonHolder>
    );
  } else {
    return <></>;
  }
}

function UnauthenticatedButton(props: IUserBasedProps) {
  if (!props.user) {
    return (
      <LoginButtonHolder onClick={props.onLogin} aria-label="Sign in with GitHub">
        <AvatarHolder>
          <GitHubLogo checkedAuth={props.checkedAuth} />
        </AvatarHolder>
        <ButtonText label="Sign In" checkedAuth={props.checkedAuth} />
      </LoginButtonHolder>
    );
  } else {
    return <></>;
  }
}

function AuthButton(props: IUserBasedProps) {
  if (props.user) {
    return <AuthenticatedButton {...props} />;
  } else {
    return <UnauthenticatedButton {...props} />;
  }
}

function DropDown(props: IUserBasedProps) {
  const links = props.links || {};
  return (
    <div
      className="absolute top-100 right-0 mt-1 p-1 bg-gray-200 rounded-lg"
      style={{ zIndex: 20, width: "150px" }}>
      <div className="w-full overflow-hidden">
        {Object.keys(links).map((key) => (
          <Link
            to={links[key].link}
            key={key}
            aria-label={key}
            className="rounded-lg uppercase block px-3 py-1 hover:bg-gray-100 hover:text-font-bold focus:bg-gray-100 focus:text-font-bold cursor-pointer">
            <div role="presentation" aria-hidden="true">
              {key}
            </div>
          </Link>
        ))}
        <hr className="border-gray-100 my-1" />
        <div
          onClick={props.onLogout}
          role="link"
          aria-label="Logout"
          tabIndex={0}
          className="rounded-lg uppercase block px-3 py-1 hover:bg-gray-100 hover:text-font-bold focus:bg-gray-100 focus:text-font-bold cursor-pointer">
          <span aria-hidden="true" role="presentation">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}

export function LoginButton() {
  const auth = useAuth();
  const links: IProfileLinks = {
    profile: { link: "/profile" },
    challenges: { link: "/profile/challenges" },
    submissions: { link: "/profile/submissions" },
    github: { link: "#" },
    settings: { link: "/profile/settings" },
  };
  const [visible, setDrop] = useState(false);

  function clicked() {
    if (auth.user) {
      setDrop(!visible);
    }
  }

  async function logout() {
    await auth.logout();
    setDrop(false);
  }

  return (
    <div className={`relative rounded-lg flex ${visible ? "" : ""}`}>
      <AuthButton
        user={auth.user}
        checkedAuth={auth.checkedAuth}
        onLogin={auth.login}
        onClick={clicked}
        aria-checked={visible}
        tabIndex={0}
      />
      {auth.user && visible ? <DropDown links={links} onLogout={logout} /> : null}
    </div>
  );
}
