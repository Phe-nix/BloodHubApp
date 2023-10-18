import { ApiProperty } from "@nestjs/swagger";

export class Hospital {
    @ApiProperty({ type: 'string', description: 'Hospital ID', example: '1' })
    id: string;
}

export class Blood {
    @ApiProperty({ type: 'string', description: 'Blood ID', example: '1' })
    id: string;
}

export class HospitalDeleteDto {
    @ApiProperty({type: Hospital})
    hospitals: Hospital;

    @ApiProperty({type: Blood})
    blood: Blood;
}