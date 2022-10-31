import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'first name', description: '第一个名字' })
  firstName: string;
  @ApiProperty({ example: 'last name', description: '最后一个名字' })
  lastName: string;
}
