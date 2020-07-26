import { ReactNode } from "react";

interface ISnippetProps {
  featureName: string | number | symbol;
  selector: string;
  repeat: number;
  children: ReactNode;
}

export default ISnippetProps;
