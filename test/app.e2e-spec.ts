import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { applicationModules } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let dataSource: DataSource;

  beforeEach(async () => {
    const dbTestModule = TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      logging: true,
      synchronize: true,
    })

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [...applicationModules, dbTestModule],
    }).compile();

    dataSource = moduleFixture.get<DataSource>(DataSource)
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await dataSource.destroy()
    await app.close();
  });

  it('/books (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/books')
      .send({
        "title": "string",
        "writer": "string",
        "imageUrl": "string",
        "price": 0,
        "tags": [
          "string"
        ]
      })

    expect(response.ok).toBeTruthy();
    expect(response.body).toHaveProperty('title')
    expect(response.body).toHaveProperty('writer')
    expect(response.body).toHaveProperty('imageUrl')
    expect(response.body).toHaveProperty('price')
    expect(response.body).toHaveProperty('tags')
    expect(response.body).toHaveProperty('id')
  });

  it('/users (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/users')
      .send({
        "email": "kelvin@dev.com",
      })

    expect(response.ok).toBeTruthy();
    expect(response.body).toHaveProperty('id')
    expect(response.body).toHaveProperty('email')
    expect(response.body).toHaveProperty('point')
  });

  it('/orders (POST)', async () => {
    const userResponse = await request(app.getHttpServer())
      .post('/users')
      .send({
        "email": "kelvin@dev.com",
      })
    const userId = userResponse.body.id;

    const bookResponse = await request(app.getHttpServer())
      .post('/books')
      .send({
        "title": "string",
        "writer": "string",
        "imageUrl": "string",
        "price": 0,
        "tags": [
          "string"
        ]
      })

    const bookId = bookResponse.body.id;

    const response = await request(app.getHttpServer())
      .post('/orders')
      .send({
        "user": {id: userId},
        "book": {id: bookId},
      })

    expect(response.ok).toBeTruthy();
    expect(response.body).toHaveProperty('id')
  });
});
