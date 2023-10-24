import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ImagesService } from 'src/images/images.service';
import { PrismaService } from 'src/prisma.service';
import { PostCreateDto } from './dto/post-create-dto';
import { PostDeleteDto } from './dto/post-delete-dto';
import { PostGetAllDto } from './dto/post-get-all.dto';

@Injectable()
export class PostService {
  constructor(
    private prisma: PrismaService,
    private imageService: ImagesService,
  ){}

  async createPost(image: Express.Multer.File, postDto: PostCreateDto): Promise<any> {
    try{
      const imagedto = {
        ...image,
        originalname: `${Date.now()}`
      }

      const post = await this.prisma.post.create({
        data: {
          image: imagedto.originalname,
          description: postDto.description,
          phone_number: postDto.phone_number,
          bloodType: postDto.bloodType, 
          case: postDto.case,
          userId: postDto.userId
        },
      });
      if(post){
        await this.imageService.uploadImage(imagedto);
      }

      return {
        message: 'POST CREATED',
        post: post
      };
    } catch(error){
      console.error(error);
      throw error;
    }
  }

  async deletePost(postDto: PostDeleteDto): Promise<any> {
    try{
      const post = await this.prisma.post.findFirst({
        where:{
          id: postDto.id
        }
      })

      if(!post){
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'POST NOT FOUND'
          },
          HttpStatus.BAD_REQUEST
        );
      };

      const deletePost = await this.prisma.post.delete({
        where:{
          id: postDto.id
        }
      });
      
      if(deletePost){
        await this.imageService.deleteImage(post.image);
      }

      return deletePost;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  async updatePost(params: string): Promise<any> {
    
  }
  
  async getPostById(id: string): Promise<any> {
    const post = await this.prisma.post.findFirst({
      where:{
        id: id
      },
      include: {
        user: true,
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

    }
    const firestoreImage = await this.imageService.getImage(post.image);
    return {
      ...post,
      image: firestoreImage
    }
  }

  async getAllPost(userId: PostGetAllDto): Promise<any> {
    const posts = await this.prisma.post.findMany(
      {
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              profileImage: true,
            }
          },
        }
      }
    );

    if(!posts){
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'POST NOT FOUND'
        },
        HttpStatus.BAD_REQUEST
      );
    }

    const postsWithImages = await Promise.all(posts.map(async (post) => {
      const firestoreImage = await this.imageService.getImage(post.image);
      return {
        ...post,
        image: firestoreImage
      }
    }));

    const postsWithUser = await Promise.all(postsWithImages.map(async (post) => {
      const firestoreImage = await this.imageService.getImage(post.user.profileImage);
      return {
        ...post,
        user:{
          ...post.user,
          profileImage: firestoreImage
        }
      }
    }));

    const bookmark = await this.prisma.bookmarkPost.findMany({
      where: {
        userId: userId.id
      }
    });

    const updatedPostsWithImages = postsWithUser.map((post) => {
      const isBookmarked = bookmark.some((book) => post.id === book.postId);
    
      return {
        ...post,
        isBookmarked
      };
    });

    return {
      message: 'GET ALL POSTS',
      posts: updatedPostsWithImages
    };
  }
}
