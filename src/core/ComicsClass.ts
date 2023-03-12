import ComicsInterface from "./Comics.interface";

export default class ComicsClass implements ComicsInterface {
	constructor(
    private _id: string,
    public title: string,
    public description: string,
    public imgURL: string,
    public isSelected: boolean
	) {}

	static empty() {
		return new ComicsClass("", "", "", "", false);
	}

	set id(id: string) {
		this._id = id;
	}

	get id(): string {
		return this._id;
	}
}
