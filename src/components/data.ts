export const menus = [
  {
    fullPath: '/',
    name: 'menu-1',
    path: '/',
    id: '1',
    parentId: '0',
    sort: 0,
    meta: {
      remark: '',
      title: '概述',
      icon: 'icon-gaishu2',
      iconColor: 'var(--el-color-primary)'
    },
    children: [
      {
        fullPath: '/dashboard',
        name: 'Dashboard',
        path: '/dashboard',
        id: 'dashboard',
        parentId: '1',
        sort: 0,
        meta: {
          remark: '',
          title: '数据看板',
          icon: '',
          iconColor: '',
          keepAlive: true,
          affix: true
        }
      }
    ]
  },
  {
    fullPath: '',
    name: 'menu-N03010000',
    path: '',
    id: 'test',
    parentId: 'SUB000003',
    sort: 0,
    children: [
      {
        fullPath: '/test-1',
        name: 'Test1',
        path: '/test-1',
        id: 'test-1',
        parentId: 'test',
        sort: 0,
        children: [
        ],
        meta: {
          menuKind: 1,
          remark: '',
          checked: false,
          title: 'test-1',
          icon: '',
          iconColor: '',
          keepAlive: false
        }
      },
      {
        fullPath: '/test-2',
        name: 'Test2',
        path: '/test-2',
        id: 'test-2',
        parentId: 'test',
        sort: 1,
        children: [
        ],
        meta: {
          menuKind: 1,
          remark: '',
          checked: false,
          title: 'test-2',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      },
      {
        fullPath: '/test-3',
        name: 'Test3',
        path: '/test-3',
        id: 'test-3',
        parentId: 'test',
        sort: 0,
        children: [
        ],
        meta: {
          menuKind: 1,
          remark: '',
          checked: false,
          title: 'test-3',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      },
    ],
    meta: {
      subsystemCode: 'SUB000003',
      menuKind: 1,
      remark: '',
      checked: false,
      title: 'Test',
      icon: 'icon-weixuanzhong',
      iconColor: 'var(--el-color-primary)'
    }
  }
]

export const menus1 = [
  {
    fullPath: '/',
    name: 'menu-1',
    path: '/',
    id: '1',
    parentId: '0',
    sort: 0,
    children: [
      {
        fullPath: '/dashboard',
        name: 'Dashboard',
        path: '/dashboard',
        id: '11',
        parentId: '1',
        sort: 0,
        meta: {
          remark: '',
          title: '数据看板',
          icon: '',
          iconColor: '',
          keepAlive: true,
          affix: true
        }
      }
    ],
    meta: {
      remark: '',
      title: '概述',
      icon: 'icon-gaishu2',
      iconColor: 'var(--el-color-primary)'
    }
  },
  {
    fullPath: '',
    name: 'menu-N03010000',
    path: '',
    id: 'N03010000',
    parentId: 'SUB000003',
    sort: 0,
    children: [
      {
        fullPath: '/supply/supplier-manage',
        name: 'SupplierManage',
        path: '/supply/supplier-manage',
        id: 'N03010100',
        parentId: 'N03010000',
        sort: 0,
        children: [
          {
            fullPath: '',
            name: 'SupplierDetail',
            path: '',
            id: 'N03010110',
            parentId: 'N03010100',
            sort: 0,
            meta: {
              remark: '',
              title: '供应商详情',
              icon: '',
              iconColor: '',
              hidden: true,
              keepAlive: true
            }
          }
        ],
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '供应商管理',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      },
      {
        fullPath: '/supply/goods-type-manage',
        name: 'GoodsTypeManage',
        path: '/supply/goods-type-manage',
        id: 'N03010200',
        parentId: 'N03010000',
        sort: 0,
        children: [
          {
            fullPath: '',
            name: 'GoodsTypeDetail',
            path: '',
            id: 'N03010210',
            parentId: 'N03010200',
            sort: 0,
            meta: {
              remark: '',
              title: '商品类型详情',
              icon: '',
              iconColor: '',
              hidden: true,
              keepAlive: true
            }
          }
        ],
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '商品类型管理',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      },
      {
        fullPath: '/supply/goods-mange',
        name: 'GoodsManage',
        path: '/supply/goods-mange',
        id: 'N03010300',
        parentId: 'N03010000',
        sort: 0,
        children: [
          {
            fullPath: '',
            name: 'GoodsDetail',
            path: '',
            id: 'N03010310',
            parentId: 'N03010300',
            sort: 0,
            meta: {
              remark: '',
              title: '商品详情',
              icon: '',
              iconColor: '',
              hidden: true,
              keepAlive: true
            }
          }
        ],
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '商品管理',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      },
      {
        fullPath: '/supply/goods-shlves-manage',
        name: 'GoodsShlvesManage',
        path: '/supply/goods-shlves-manage',
        id: 'N03010400',
        parentId: 'N03010000',
        sort: 0,
        children: [
          {
            fullPath: '',
            name: 'GoodsShelvesDetail',
            path: '',
            id: 'N03010410',
            parentId: 'N03010400',
            sort: 0,
            meta: {
              remark: '',
              title: '商品上架详情',
              icon: '',
              iconColor: '',
              hidden: true,
              keepAlive: true
            }
          }
        ],
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '商品上架',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      }
    ],
    meta: {
      subsystemCode: 'SUB000003',
      menuKind: 1,
      remark: '',
      checked: false,
      title: '供应管理',
      icon: 'icon-weixuanzhong',
      iconColor: 'var(--el-color-primary)'
    }
  },
  {
    fullPath: '',
    name: 'menu-N03020000',
    path: '',
    id: 'N03020000',
    parentId: 'SUB000003',
    sort: 0,
    children: [
      {
        fullPath: '/self-pickup/head-manage',
        name: 'HeadManage',
        path: '/self-pickup/head-manage',
        id: 'N03020100',
        parentId: 'N03020000',
        sort: 0,
        children: [
          {
            fullPath: '',
            name: 'HeadDetail',
            path: '',
            id: 'N03020110',
            parentId: 'N03020100',
            sort: 0,
            meta: {
              remark: '',
              title: '团长详情',
              icon: '',
              iconColor: '',
              hidden: true,
              keepAlive: true
            }
          }
        ],
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '团长管理',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      }
    ],
    meta: {
      subsystemCode: 'SUB000003',
      menuKind: 1,
      remark: '',
      checked: false,
      title: '自提点管理',
      icon: 'icon-mendianziti',
      iconColor: 'var(--el-color-primary)'
    }
  },
  {
    fullPath: '',
    name: 'menu-N03030000',
    path: '',
    id: 'N03030000',
    parentId: 'SUB000003',
    sort: 0,
    children: [
      {
        fullPath: '/order/order-delivery-manage',
        name: 'OrderDeliveryManage',
        path: '/order/order-delivery-manage',
        id: 'N03030100',
        parentId: 'N03030000',
        sort: 0,
        children: [
          {
            fullPath: '',
            name: 'OrderDeliveryEdit',
            path: '',
            id: 'N03030110',
            parentId: 'N03030100',
            sort: 0,
            meta: {
              remark: '',
              title: '订单配送详情',
              icon: '',
              iconColor: '',
              hidden: true,
              keepAlive: true
            }
          },
          {
            fullPath: '',
            name: 'OrderDeliveryView',
            path: '',
            id: 'N03030120',
            parentId: 'N03030100',
            sort: 0,
            meta: {
              remark: '',
              title: '订单配送详情',
              icon: '',
              iconColor: '',
              hidden: true,
              keepAlive: true
            }
          }
        ],
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '订单配送',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      },
      {
        fullPath: '/order/order-to-be-paid',
        name: 'OrderToBePaid',
        path: '/order/order-to-be-paid',
        id: 'N03030200',
        parentId: 'N03030000',
        sort: 0,
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '待支付订单',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      },
      {
        fullPath: '/order/order-to-be-delivered',
        name: 'OrderToBeDelivered',
        path: '/order/order-to-be-delivered',
        id: 'N03030300',
        parentId: 'N03030000',
        sort: 0,
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '待配送订单',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      },
      {
        fullPath: '/order/order-town-to-be-received',
        name: 'OrderTownToBeReceived',
        path: '/order/order-town-to-be-received',
        id: 'N03030400',
        parentId: 'N03030000',
        sort: 0,
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '镇级待收货订单',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      },
      {
        fullPath: '/order/order-township-to-be-received',
        name: 'OrderTownshipToBeReceived',
        path: '/order/order-township-to-be-received',
        id: 'N03030500',
        parentId: 'N03030000',
        sort: 0,
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '村级待收货订单',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      },
      {
        fullPath: '/order/order-user-to-be-received',
        name: 'OrderUserToBeReceived',
        path: '/order/order-user-to-be-received',
        id: 'N03030600',
        parentId: 'N03030000',
        sort: 0,
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '用户待签收订单',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      },
      {
        fullPath: '/order/order-completed',
        name: 'OrderCompleted',
        path: '/order/order-completed',
        id: 'N03030700',
        parentId: 'N03030000',
        sort: 0,
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '已完成订单',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      }
    ],
    meta: {
      subsystemCode: 'SUB000003',
      menuKind: 1,
      remark: '',
      checked: false,
      title: '优享订单',
      icon: 'icon-jifenshangpindingdanguanli',
      iconColor: 'var(--el-color-primary)'
    }
  },
  {
    fullPath: '',
    name: 'menu-N03040000',
    path: '',
    id: 'N03040000',
    parentId: 'SUB000003',
    sort: 0,
    children: [
      {
        fullPath: '/finance/scale-manage',
        name: 'ScaleManage',
        path: '/finance/scale-manage',
        id: 'N03040100',
        parentId: 'N03040000',
        sort: 0,
        children: [
          {
            fullPath: '',
            name: 'ScaleDetail',
            path: '',
            id: 'N03040110',
            parentId: 'N03040100',
            sort: 0,
            meta: {
              remark: '',
              title: '分账详情',
              icon: '',
              iconColor: '',
              hidden: true,
              keepAlive: true
            }
          }
        ],
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '分账设置',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      },
      {
        fullPath: '/finance/order-benefit',
        name: 'OrderBenefit',
        path: '/finance/order-benefit',
        id: 'N03040300',
        parentId: 'N03040000',
        sort: 0,
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '分账管理',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      },
      {
        fullPath: '/finance/transfer-manage',
        name: 'TransferManage',
        path: '/finance/transfer-manage',
        id: 'N03040400',
        parentId: 'N03040000',
        sort: 0,
        meta: {
          subsystemCode: 'SUB000003',
          menuKind: 1,
          remark: '',
          checked: false,
          title: '转账管理',
          icon: '',
          iconColor: '',
          keepAlive: true
        }
      }
    ],
    meta: {
      subsystemCode: 'SUB000003',
      menuKind: 1,
      remark: '',
      checked: false,
      title: '财务管理',
      icon: 'icon-caiwuzijinguanli',
      iconColor: 'var(--el-color-primary)'
    }
  }
]
