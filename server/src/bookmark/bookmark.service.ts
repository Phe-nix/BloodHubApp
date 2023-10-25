import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from 'src/prisma.service';
import { bookMarkPostDto } from "./dto/bookmark-post.dto";
import { bookMarkNewsDto } from "./dto/bookmark-news.dto";
import { ImagesService } from "src/images/images.service";


@Injectable()
export class BookmarkService {
  constructor(
    private imageService: ImagesService,
    private prismaService: PrismaService,
  ){}

  async createBookmarkPost(bookMarkDto: bookMarkPostDto): Promise<any> {
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

      const bookmark = await this.prismaService.bookmarkPost.create({
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

  async createBookmarkNew(bookMarkDto: bookMarkNewsDto): Promise<any>{
    try{
      const news = await this.prismaService.news.findUnique({
        where:{
          id: bookMarkDto.newId,
        }
      });

      if(!news){
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'NEWS NOT FOUND'
          },
          HttpStatus.BAD_REQUEST
        );
      }

      const user = await this.prismaService.user.findUnique({
        where:{
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

      const bookmark = await this.prismaService.bookmarkNews.create({
        data:{
          userId: user.id,
          newId: news.id
        }
      });

      return {
        message: 'BOOKMARK CREATED',
        bookmark: bookmark
      }
    } catch(error){
      console.error(error);
      throw error;
    }
  }

  async deleteBookmarkPost(bookMarkDto: bookMarkPostDto): Promise<any> {
    try{
      const bookmark = await this.prismaService.bookmarkPost.findFirst({
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

      const deleteBookmark = await this.prismaService.bookmarkPost.delete({
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

  async deleteBookmarkNew(bookMarkDto: bookMarkNewsDto){
    try{
      const bookmark = await this.prismaService.bookmarkNews.findFirst({
        where:{
          AND: [
            {
              userId: bookMarkDto.userId,
            },
            {
              newId: bookMarkDto.newId,
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

      const deleteBookMark = await this.prismaService.bookmarkNews.delete({
        where:{
          id: bookmark.id
        }
      });

      return {
        message: 'BOOKMARK DELETED',
        bookmark: deleteBookMark
      }

    } catch (err) {

    }
  }

  async getBookmarkPost(userId: string): Promise<any>{
    const bookmark = await this.prismaService.bookmarkPost.findMany({
      where:{
        userId: userId,
      },
      include: {
        post: {
          include: {
            user: {
              select: {
                profileImage: true,
                firstName: true,
                lastName: true,
              }
            },
          }
        }
      }
    });

    if(!bookmark){
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'BOOKMARK NOT FOUND'
        },
        HttpStatus.BAD_REQUEST
      );
    }

    const isBookmark = await Promise.all(bookmark.map(async (item) => {
      const isBookmark = await this.prismaService.bookmarkPost.findFirst({
        where: {
          AND: [
            {
              userId: userId,
            },
            {
              postId: item.postId,
            }
          ]
        }
      });

      return {
        ...item,
        post: {
          ...item.post,
          isBookmark: !!isBookmark
        }
      }
    }))

    const bookmarkWithImage = await Promise.all(isBookmark.map(async (item) => {
      const firestoreImage = await this.imageService.getImage(item.post.image);
      const firestoreProfileImage = await this.imageService.getImage(item.post.user.profileImage);

      return {
        ...item,
        post: {
          ...item.post,
          image: firestoreImage,
          user: {
            ...item.post.user,
            profileImage: firestoreProfileImage
          }
        },
      }
    }))

    return {
      message: 'BOOKMARK FOUND',
      bookmark: bookmarkWithImage
    }
  }

  async getBookmarkNew(userId: string): Promise<any>{
    const bookmark = await this.prismaService.bookmarkNews.findMany({
      where:{
        userId: userId,
      },
      include: {
        news: true
      }
    });

    if(!bookmark){
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'BOOKMARK NOT FOUND'
        },
        HttpStatus.BAD_REQUEST
      );
    }

    const isBookmark = await Promise.all(bookmark.map(async (item) => {
      const isBookmark = await this.prismaService.bookmarkNews.findFirst({
        where: {
          AND: [
            {
              userId: userId,
            },
            {
              newId: item.newId,
            }
          ]
        }
      });

      return {
        ...item,
        news: {
          ...item.news,
          isBookmark: !!isBookmark
        }
      }
    }))

    const bookmarkWithImage = await Promise.all(isBookmark.map(async (item) => {
      const firestoreImage = await this.imageService.getImage(item.news.image);

      return {
        ...item,
        news: {
          ...item.news,
          image: firestoreImage
        }
      }
    }))

    return {
      message: 'BOOKMARK FOUND',
      bookmark: bookmarkWithImage
    }
  }
}
