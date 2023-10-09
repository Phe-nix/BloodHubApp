import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from 'src/prisma.service';
import { bookMarkDto } from "./dto/bookmark-add-dto";


@Injectable()
export class BookmarkService {
  constructor(
    private prismaService: PrismaService,
  ){}

  async createBookmark(bookMarkDto: any): Promise<any> {
    try{
      const post = await this.prismaService.post.findUnique({
        where: {
          id: bookMarkDto.postId,
        }
      });

      if(!post){
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'POST NOT FOUND'
          },
          HttpStatus.BAD_REQUEST
        );
      };

      const user = await this.prismaService.user.findUnique({
        where: {
          id: bookMarkDto.userId,
        }
      });

      if(!user){
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'USER NOT FOUND'
          },
          HttpStatus.BAD_REQUEST
        );
      }

      const bookmark = await this.prismaService.bookmark.create({
        data: {
          userId: bookMarkDto.userId,
          postId: bookMarkDto.postId,
        }
      });

      return {
        message: 'BOOKMARK CREATED',
        bookmark: bookmark
      };
    } catch(error){
      console.error(error);
      throw error;
    }
  }

  async deleteBookmark(bookMarkDto: bookMarkDto): Promise<any> {
    try{
      const bookmark = await this.prismaService.bookmark.findFirst({
        where:{
          AND: [
            {
              userId: bookMarkDto.userId,
            },
            {
              postId: bookMarkDto.postId,
            }
          ]
        }
      })

      if(!bookmark){
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'BOOKMARK NOT FOUND'
          },
          HttpStatus.BAD_REQUEST
        );
      }

      const deleteBookmark = await this.prismaService.bookmark.delete({
        where:{
          id: bookmark.id
        }
      });

      return {
        message: 'BOOKMARK DELETED',
        bookmark: deleteBookmark
      }
    } catch(error){
    }
  }

}
