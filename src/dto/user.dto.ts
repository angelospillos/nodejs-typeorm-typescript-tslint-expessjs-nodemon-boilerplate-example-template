import { IsInt, IsAlpha } from "class-validator";

export class UserDto {

    @IsInt()
    id: number;

    @IsAlpha()
    firstName: string;

    @IsAlpha()
    lastName: string;

    @IsInt()
    age: number;

}