import { Body, Controller, Post } from "@nestjs/common";
import { MailService } from "./mail.service";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { MailSenderDto } from "./dto/mail-sender-dto";

@Controller('mail')
@ApiTags('Mail')
export class MailController {
  constructor(
    private readonly mailService: MailService
  ) {}

  @Post('postMail')
  @ApiBody({ type: MailSenderDto })
  public async postMail(@Body() mailDto : MailSenderDto): Promise<any>{
    return await this.mailService.postMail(mailDto);
  }
}