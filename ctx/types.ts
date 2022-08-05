import React from "react";

export interface ILangContext {
	lang: string;
	setLang?: React.Dispatch<React.SetStateAction<string>>;
}
