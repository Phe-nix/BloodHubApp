import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { AppointmentCreateDto } from "./dto/appointment-create.dto";
import { AppointmentDeleteDto } from "./dto/appointment-delete.dto";
import { AppointmentGeyById } from "./dto/appointment-get-by-id.dto";
import { AppointmentUpdateDto } from "./dto/appointment-update.dto";

@Injectable()
export class AppointmentService {
  constructor(
    private prismaSerivce: PrismaService,
  ){}

  async addAppointment(appointmentDto: AppointmentCreateDto): Promise<any> {
    const user = await this.prismaSerivce.user.findUnique({
      where:{
        id: appointmentDto.donatorId
      }
    })

    if(!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'USER NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      )
    }

    const post = await this.prismaSerivce.post.findUnique({
      where:{
        id: appointmentDto.postId
      }
    })

    if(!post) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'POST NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      )
    }

    const appointment = await this.prismaSerivce.appointment.create({
      data: {
        ...appointmentDto
      }
    })

    return {
      message: "Appointment created successfully",
      appointment: appointment
    }
  }

  async updateAppointment(appointmentDto: AppointmentUpdateDto): Promise<any> {
    const appointment = await this.prismaSerivce.appointment.findUnique({
      where:{
        id: appointmentDto.id
      }
    })

    if(!appointment){
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'APPOINTMENT NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      )
    }

    const updateAppointment = await this.prismaSerivce.appointment.update({
      where:{
        id: appointmentDto.id
      },
      data:{
        status: appointmentDto.status
      }
    })

    return {
      message: "Appointment updated successfully",
      appointment: updateAppointment
    }
  }

  async deleteAppointment(appointmentDto: AppointmentDeleteDto): Promise<any> {
    const appointment = await this.prismaSerivce.appointment.findUnique({
      where:{
        id: appointmentDto.id
      }
    })

    if(!appointment){
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'APPOINTMENT NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      )
    }

    const deleteAppointment = await this.prismaSerivce.appointment.delete({
      where:{
        id: appointmentDto.id
      }
    })

    return {
      message: 'Appointment deleted successfully',
      appointment: deleteAppointment
    }
  }

  async getAppoinmentById(appointmentDto: AppointmentGeyById): Promise<any> {
    const user = await this.prismaSerivce.user.findUnique({
     where:{
      id: appointmentDto.userId
     }
    });

    if(!user){
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'USER NOT FOUND'
        },
        HttpStatus.NOT_FOUND
      )
    }

    const appointment = await this.prismaSerivce.appointment.findMany({
      where:{
        OR:[
          { postId: appointmentDto.postId },
          { donatorId: appointmentDto.userId },
          { id: appointmentDto.id },
        ]
      }
    })

    return {
      message: 'GET APPOINTMENT BY USER',
      appointment: appointment
    }
  }
}