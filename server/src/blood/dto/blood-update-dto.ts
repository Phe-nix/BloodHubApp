import { ApiProperty } from "@nestjs/swagger";

class Hospital {
    @ApiProperty({ type:'string', description:"Hospital Id", example:"1"})
    id: string;
    @ApiProperty({type:'string', format:'binary', description:'Image File'})
    hospitalImage?: any;
    @ApiProperty({type:'string', description:'Hospital Name', example:"Siriraj Hospital"})
    hospitalName?: string;
}

class Blood {

    @ApiProperty({ type: 'string', description: 'Image file' })
    id?: string;
    @ApiProperty({ type: 'number', description: "A Positive Need", example: "10,800" })
    aPositiveNeed: number;
    @ApiProperty({ type: 'number', description: "B Positive Need", example: "16,200" })
    bPositiveNeed: number;
    @ApiProperty({ type: 'number', description: "O Positive Need", example: "21,600" })
    oPositiveNeed: number;
    @ApiProperty({ type: 'number', description: "AB Positive Need", example: "5,400" })
    abPositiveNeed: number;
    @ApiProperty({ type: 'string', description: "A Positive Recieve", example: "98%" })
    aPositiveRecieve: string;
    @ApiProperty({ type: 'string', description: "B Positive Recieve", example: "98%" })
    bPositiveRecieve: string;
    @ApiProperty({ type: 'string', description: "O Positive Recieve", example: "95%" })
    oPositiveRecieve: string;
    @ApiProperty({ type: 'string', description: "AB Positive Recieve", example: "85%" })
    abPositiveRecieve: string;
    @ApiProperty({ type: 'number', description: "A Negative Need", example: "99" })
    aNegativeNeed: number;
    @ApiProperty({ type: 'number', description: "B Negative Need", example: "9" })
    bNegativeNeed: number;
    @ApiProperty({ type: 'number', description: "O Negative Need", example: "234" })
    oNegativeNeed: number;
    @ApiProperty({ type: 'number', description: "AB Negative Need", example: "4" })
    abNegativeNeed: number;
    @ApiProperty({ type: 'string', description: "Hospital ID", example: "123123123"})
    hopitalId: string;
}

export class HospitalUpdateDto {
    @ApiProperty({type: Hospital})
    hospitals: Hospital;

    @ApiProperty({type: Blood})
    blood: Blood;
}



