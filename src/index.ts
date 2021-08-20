import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import { IS_PRODUCTION } from './constants';

const main = async() => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: 'lireddit',
    debug: !IS_PRODUCTION,
    type: 'postgresql',
  });
  const post = orm.em.create(Post, { title: 'my first post' })
}

main();
