import { Module } from '@nestjs/common';
import { AddressModule } from './address/address.module';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { DonationModule } from './donation/donation.module';
import { NewsModule } from './news/news.module';
import { PostModule } from './post/post.module';
import { UsersModule } from './users/users.module';
import { BloodModule } from './blood/blood.module';
import { MailModule } from './mail/mail.module';
import { OTPModule } from './otp/otp.module';
@Module({
  imports: [
    UsersModule,
    AuthModule,
    NewsModule,
    PostModule,
    BookmarkModule,
    AddressModule,
    DonationModule,
    NewsModule,
    BloodModule,
    MailModule,
    OTPModule
  ],
})
export class AppModule {}
