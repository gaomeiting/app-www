export class Dome {
	constructor({
        id,
        status,
        time,
        tags,
        gender,
        speed,
		demoTitle,
        demoContent,
        joinNum
	}) {

		this.id = id;
		this.status = status;
		this.time = time;
		this.tags = tags;
		this.gender = gender;
		this.speed = speed;
		this.demoTitle = demoTitle;
		this.demoContent = demoContent;
		this.joinNum = joinNum;
	}
}
export function CreateDemo({
    id,
    status,
    time,
    tags,
    gender,
    speed,
    demoTitle,
    demoContent,
    joinNum
}) {
	return new Demo({
        id,
        status,
        time,
        tags,
        gender,
        speed,
		demoTitle,
        demoContent,
        joinNum
	})
}