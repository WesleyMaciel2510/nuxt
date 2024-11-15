import type { Product } from './product';
import type { UserInfo } from './userInfo';
import type { SystemInfo } from './systemInfo';

export interface State {
  products: Product[];
  userInfo: UserInfo;
  systemInfo: SystemInfo;
  authUser: any;
}
