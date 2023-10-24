import { ApiProperty } from "@nestjs/swagger";

export class BloodCreateDto {
    @ApiProperty({ type: 'number', description: "A Positive Need", example: 10800 })
    aPositiveNeed: number;

    @ApiProperty({ type: 'number', description: "B Positive Need", example: 16200 })
    bPositiveNeed: number;

    @ApiProperty({ type: 'number', description: "O Positive Need", example: 21600 })
    oPositiveNeed: number;

    @ApiProperty({ type: 'number', description: "AB Positive Need", example: 5400 })
    abPositiveNeed: number;

    @ApiProperty({ type: 'string', description: "A Positive Receive", example: "98%" })
    aPositiveReceive: string;

    @ApiProperty({ type: 'string', description: "B Positive Receive", example: "98%" })
    bPositiveReceive: string;

    @ApiProperty({ type: 'string', description: "O Positive Receive", example: "95%" })
    oPositiveReceive: string;

    @ApiProperty({ type: 'string', description: "AB Positive Receive", example: "85%" })
    abPositiveReceive: string;

    @ApiProperty({ type: 'number', description: "A Negative Need", example: 99 })
    aNegativeNeed: number;

    @ApiProperty({ type: 'number', description: "B Negative Need", example: 9 })
    bNegativeNeed: number;

    @ApiProperty({ type: 'number', description: "O Negative Need", example: 234 })
    oNegativeNeed: number;

    @ApiProperty({ type: 'number', description: "AB Negative Need", example: 4 })
    abNegativeNeed: number;
}


