import { Request, Response } from "express";
import { getManager } from "typeorm";
import { UserEntity } from "../entity/user.entity";

export namespace UserAction {
  /**
  * Loads all users from the database.
  */
  export async function getAll(request: Request, response: Response) {

    // get a user repository to perform operations with user
    const userRepository = getManager().getRepository(UserEntity);

    // load a user by a given user id
    const users = await userRepository.find();

    // return loaded users
    response.send(users);
  }

  /**
   * Loads user by a given id.
   */
  export async function getById(request: Request, response: Response) {

    // get a post repository to perform operations with user
    const userRepository = getManager().getRepository(UserEntity);

    // load a post by a given post id
    const user = await userRepository.findOne(request.params.id);

    // if user was not found return 404 to the client
    if (!user) {
      response.status(404);
      response.end();
      return;
    }

    // return loaded post
    response.send(user);
  }

  /**
   * Saves given user.
   */
  export async function save(request: Request, response: Response) {

    // get a user repository to perform operations with user
    const userRepository = getManager().getRepository(UserEntity);

    // create a real user object from user json object sent over http
    const newUser = userRepository.create(request.body);

    // save received user
    await userRepository.save(newUser);

    // return saved user back
    response.send(newUser);
  }
}