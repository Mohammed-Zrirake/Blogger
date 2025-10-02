import { Resolver} from '@nestjs/graphql';
import { CommentService } from './comment.service';

import { CommentEntity as Comment } from './entities/comment.entity';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}


}
