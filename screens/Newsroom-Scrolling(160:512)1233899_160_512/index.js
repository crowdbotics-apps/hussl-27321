import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_160_513}>
        <View style={styles.View_160_514}>
          <View style={styles.View_160_515}>
            <View style={styles.View_160_516} />
            <View style={styles.View_160_517}>
              <Text style={styles.Text_160_517}>Read more 🡢</Text>
            </View>
            <View style={styles.View_160_518}>
              <Text style={styles.Text_160_518}>Lisa Barnes</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/152b/f1ea/6854c4ce4020f8b1a3d1191047693a91"
              }}
              style={styles.ImageBackground_160_519}
            />
            <View style={styles.View_160_520}>
              <View style={styles.View_160_521}>
                <Text style={styles.Text_160_521}>
                  Here are 11 things I wish I knew when I started my business. I
                  hope they will save you some time and some anguish because
                  (experience is a good teacher here)...
                </Text>
              </View>
              <View style={styles.View_160_522}>
                <Text style={styles.Text_160_522}>
                  11 Things I Wish I Knew When I Started My Business
                </Text>
              </View>
            </View>
            <View style={styles.View_160_523}>
              <Text style={styles.Text_160_523}>1 month ago</Text>
            </View>
            <View style={styles.View_160_524}>
              <Text style={styles.Text_160_524}>BUSINESS</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4621/293a/4a31e1c18937b68a95854a8e216f1ed5"
              }}
              style={styles.ImageBackground_160_525}
            />
            <View style={styles.View_160_526}>
              <View style={styles.View_160_527}>
                <View style={styles.View_160_528}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6278/e127/086951149de449fae490f5deecc15c11"
                    }}
                    style={styles.ImageBackground_160_529}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a1d/52a5/f5a709ff747bc7618bc984ebd1ce072b"
                    }}
                    style={styles.ImageBackground_160_530}
                  />
                </View>
                <View style={styles.View_160_546}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb95/62e4/c851b446f0baf0d625be61283671996d"
                    }}
                    style={styles.ImageBackground_160_547}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f513/a459/c2e6f5d80d76c6ac0dad061775a02dd4"
                    }}
                    style={styles.ImageBackground_160_552}
                  />
                  <View style={styles.View_160_557}>
                    <View style={styles.View_160_558}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1615/fa1e/46ee78ca6d274c22aa16850201946911"
                        }}
                        style={styles.ImageBackground_160_559}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6e8/1707/55efd9df199752bbb2aea7f9640e3a43"
                        }}
                        style={styles.ImageBackground_160_560}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5263/49e6/096726daa01810d19833d7965d00df37"
                        }}
                        style={styles.ImageBackground_160_561}
                      />
                      <View style={styles.View_160_562}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66bd/4f6e/e8c69972e710bb02388a80beaae910d7"
                          }}
                          style={styles.ImageBackground_160_563}
                        />
                      </View>
                      <View style={styles.View_160_565}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/315a/9beb/f7bf01d058ffd0ce8cfd49aca537607d"
                          }}
                          style={styles.ImageBackground_160_566}
                        />
                      </View>
                      <View style={styles.View_160_568}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/315a/9beb/f7bf01d058ffd0ce8cfd49aca537607d"
                          }}
                          style={styles.ImageBackground_160_569}
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad1/0722/c2f38a1183aee514836cca99f15cd321"
                        }}
                        style={styles.ImageBackground_160_571}
                      />
                    </View>
                    <View style={styles.View_160_572}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/072c/4962/cecdd380571140717f46a2d802d7d02d"
                        }}
                        style={styles.ImageBackground_160_573}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64ed/b331/db34831ebe11fd83053f7b3334b6013f"
                        }}
                        style={styles.ImageBackground_160_577}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a966/bf0d/cfd96277fd8aa067d61a5ec70a7d830f"
                        }}
                        style={styles.ImageBackground_160_583}
                      />
                      <View style={styles.View_160_590}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3fd/16d0/a4227747e4399bf0980771efc16d71ab"
                          }}
                          style={styles.ImageBackground_160_591}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d995/3707/5eb771359110a440bf66dfbcc52dbbf9"
                          }}
                          style={styles.ImageBackground_160_592}
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6872/2f4a/0af9c2b1d6013bbc42b29fa8355046ba"
                        }}
                        style={styles.ImageBackground_160_597}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a389/e6b1/3c99a28ff015634a82743cdd7e58462b"
                        }}
                        style={styles.ImageBackground_160_601}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8429/59ed/fc33235f9b874c673a5253e7c39ffc13"
                      }}
                      style={styles.ImageBackground_160_602}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a5/8e9a/75d190d49781844188864b7c7f93738a"
                      }}
                      style={styles.ImageBackground_160_605}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b72/f913/ef54f5bf47c49f385c3bcd6a76fa8297"
                    }}
                    style={styles.ImageBackground_160_608}
                  />
                  <View style={styles.View_160_609}>
                    <View style={styles.View_160_610}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/471d/6065/dbcc910fba3ed8d85d13953f02b5bee3"
                        }}
                        style={styles.ImageBackground_160_611}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c129/6417/5402b3ad29fbeaa9498be77bab153bb3"
                        }}
                        style={styles.ImageBackground_160_612}
                      />
                      <View style={styles.View_160_613}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e26e/db4a/10d62e3a75ad863d2247df15327713b2"
                          }}
                          style={styles.ImageBackground_160_614}
                        />
                      </View>
                      <View style={styles.View_160_616}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/315a/9beb/f7bf01d058ffd0ce8cfd49aca537607d"
                          }}
                          style={styles.ImageBackground_160_617}
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b3/dbb0/3c82ae970038832a543781d0873ae6fc"
                        }}
                        style={styles.ImageBackground_160_619}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b501/c0c2/9f187360218ae2421d2d1e9e8fe6104d"
                        }}
                        style={styles.ImageBackground_160_620}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc77/eebc/44b024f8eacc8924d9fd79e1bfa6091d"
                      }}
                      style={styles.ImageBackground_160_621}
                    />
                    <View style={styles.View_160_625}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a51b/92c2/d80ff56c511fbd4d3a0445619bacf074"
                        }}
                        style={styles.ImageBackground_160_626}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a678/bbee/0623beb23e8dbca2e6f7fdf267006f48"
                        }}
                        style={styles.ImageBackground_160_632}
                      />
                      <View style={styles.View_160_639}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48db/3642/84a56f32bf30570acbc076a66e5f5a1e"
                          }}
                          style={styles.ImageBackground_160_640}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81c7/2747/c12c8899671bca9c913e2dac88623a21"
                          }}
                          style={styles.ImageBackground_160_641}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc10/7e9e/6ddffe9d826670e7d3977c66f939826d"
                          }}
                          style={styles.ImageBackground_160_646}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1288/ac8e/6296273596d0ed75c0a3baead006f79b"
                          }}
                          style={styles.ImageBackground_160_647}
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acf7/d01a/9fd684ced45e486be1b109c9597fa4f5"
                        }}
                        style={styles.ImageBackground_160_648}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cfb/fb3b/36f816b285970e724ff9a4d0c21ac3a6"
                        }}
                        style={styles.ImageBackground_160_652}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8503/80f5/88b3068916d815c4ccc633a3c596e799"
                      }}
                      style={styles.ImageBackground_160_653}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38c8/784a/d22cdbad2b167bb96c97d469ca9a4670"
                    }}
                    style={styles.ImageBackground_160_654}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/716e/3b30/307e7c42a6afb5fdf953be3c6de0d96b"
                    }}
                    style={styles.ImageBackground_160_655}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_160_656}>
            <View style={styles.View_160_657} />
            <View style={styles.View_160_658}>
              <Text style={styles.Text_160_658}>Read more 🡢</Text>
            </View>
            <View style={styles.View_160_659}>
              <Text style={styles.Text_160_659}>Patricia Kemp</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c2/4ebf/273ec8b70c235a1a984438a0157e861c"
              }}
              style={styles.ImageBackground_160_660}
            />
            <View style={styles.View_160_661}>
              <View style={styles.View_160_662}>
                <Text style={styles.Text_160_662}>
                  This is the second part of the SMM starter pack series of
                  articles. If you made it this far, you must be willing to
                  learn about promoting business through social media.{" "}
                </Text>
              </View>
              <View style={styles.View_160_663}>
                <Text style={styles.Text_160_663}>
                  SMM starter pack, part 2: content promotion
                </Text>
              </View>
            </View>
            <View style={styles.View_160_664}>
              <Text style={styles.Text_160_664}>17 days ago</Text>
            </View>
            <View style={styles.View_160_665}>
              <Text style={styles.Text_160_665}>MEDIA</Text>
            </View>
            <View style={styles.View_160_666} />
            <View style={styles.View_160_667}>
              <View style={styles.View_160_668}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c69/666f/cd949491e2a8edc24e18ce52e37c7629"
                  }}
                  style={styles.ImageBackground_160_669}
                />
                <View style={styles.View_160_670}>
                  <View style={styles.View_160_671}>
                    <View style={styles.View_160_672}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ff4/41f9/93cbf358246579f07f8a22c84d2c7e46"
                        }}
                        style={styles.ImageBackground_160_673}
                      />
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199e/4661/0a95073ee62a39ed9d748dc3a6737dcd"
                  }}
                  style={styles.ImageBackground_160_675}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a79/efc1/23064eb54b747e433a62b8960c1eea7d"
                  }}
                  style={styles.ImageBackground_160_676}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f13d/403e/4b5ab4d70095f76a87f7b4034b3d2235"
                  }}
                  style={styles.ImageBackground_160_679}
                />
                <View style={styles.View_160_680}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be1a/3bb1/574ac8362c9133796563fabde9a029fc"
                    }}
                    style={styles.ImageBackground_160_681}
                  />
                </View>
                <View style={styles.View_160_683}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd2f/dec9/6341aeef23c0f3f3cd238ffd1562d1f2"
                    }}
                    style={styles.ImageBackground_160_684}
                  />
                  <View style={styles.View_160_685}>
                    <View style={styles.View_160_686}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf4d/eb81/2747fee330e543812ebfe8f866b3e035"
                        }}
                        style={styles.ImageBackground_160_687}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b817/7082/3affe36682a6cac26723a0f434458510"
                        }}
                        style={styles.ImageBackground_160_688}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ae/b4fc/9dbeff02cf3a324f6e473960c3fe82f9"
                        }}
                        style={styles.ImageBackground_160_689}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f36/084d/745309391aef366d6e96a3c2abca45eb"
                        }}
                        style={styles.ImageBackground_160_694}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995c/8378/ca77894580f390c813b43c29012da471"
                      }}
                      style={styles.ImageBackground_160_695}
                    />
                  </View>
                </View>
                <View style={styles.View_160_696}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/befa/17cb/2e240c380a68abd8e227b6ee24a624f6"
                    }}
                    style={styles.ImageBackground_160_697}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3f/c4eb/38a9c05b06e97dfb7e0c3827df5482b2"
                    }}
                    style={styles.ImageBackground_160_698}
                  />
                </View>
                <View style={styles.View_160_703}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c200/57f1/95ffe5d05d82488832dd661370eda959"
                    }}
                    style={styles.ImageBackground_160_704}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59cf/0b47/b7fb96f1b5c802c1a8b1d99030145f10"
                    }}
                    style={styles.ImageBackground_160_705}
                  />
                </View>
                <View style={styles.View_160_710}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66b2/5a43/04340d644c13b7a608667b8bf0d44498"
                    }}
                    style={styles.ImageBackground_160_711}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbc9/926a/a2eb1b387817cea5676a64a2b2554edd"
                    }}
                    style={styles.ImageBackground_160_712}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c513/a04b/2a9d4ec4ed6890276c6938951586921e"
                  }}
                  style={styles.ImageBackground_160_715}
                />
                <View style={styles.View_160_718}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14a7/42c0/3d9c13c388a71b8c91af8800348ebcc7"
                    }}
                    style={styles.ImageBackground_160_719}
                  />
                  <View style={styles.View_160_720}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0c4/e141/f1a5977f092c04979712445897c6a251"
                      }}
                      style={styles.ImageBackground_160_721}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e138/8e13/68babe641cd8681a31200998f7d29251"
                      }}
                      style={styles.ImageBackground_160_724}
                    />
                    <View style={styles.View_160_727}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5de/5d2b/464b999ed507670a5dfb7cd8db7f3612"
                        }}
                        style={styles.ImageBackground_160_728}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfa1/88c5/c7502b5c40e18c2e4f118873689bb124"
                        }}
                        style={styles.ImageBackground_160_731}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee62/1784/f34c2d7747dcac921f1dd76527e45617"
                        }}
                        style={styles.ImageBackground_160_732}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9f2/eb5d/18268f264b3d9c927d1a6515625cf2fa"
                        }}
                        style={styles.ImageBackground_160_733}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6259/ba51/ba9b02008d300acd9388e1c046179f94"
                        }}
                        style={styles.ImageBackground_160_734}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd0/fc41/0da8d304ce270757f2009c5d7fd180f8"
                        }}
                        style={styles.ImageBackground_160_735}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93ff/5fe2/d04765ec174fe67286bd9f51b38abe8f"
                        }}
                        style={styles.ImageBackground_160_736}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9702/124c/650c09f899a28ee346ae9dea575012d3"
                        }}
                        style={styles.ImageBackground_160_737}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c7a/f71b/517a57105bffb6861c011071421bfc96"
                        }}
                        style={styles.ImageBackground_160_738}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5150/98ad/b0dbe8f25a5b3cfe0cc789ec9d56c88e"
                        }}
                        style={styles.ImageBackground_160_739}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e43/3abe/ae49b169785838601303c0622c14a218"
                        }}
                        style={styles.ImageBackground_160_740}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/172a/04dd/fd6241912eea9081feb7fdbcaaca6da8"
                        }}
                        style={styles.ImageBackground_160_741}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68e7/98f9/07f5f42d82e37654911bb41dc0b47efb"
                        }}
                        style={styles.ImageBackground_160_742}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff08/59f4/3930ce634c58c80836c62fbcac29b736"
                        }}
                        style={styles.ImageBackground_160_743}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cde/f25c/df1126316e9b4d73909de2c062c97a29"
                        }}
                        style={styles.ImageBackground_160_744}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e51d/cbbe/913e3aee23f8fe720e9fb4c7586340ea"
                      }}
                      style={styles.ImageBackground_160_745}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e4/434a/fb92b7cc43e69d81aab95daf3cbd8d97"
                      }}
                      style={styles.ImageBackground_160_746}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e7c/1df8/670467b8be4b3bb6b9fbcbfd2a0c1404"
                      }}
                      style={styles.ImageBackground_160_747}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c39a/ad37/6af02e0118a4179cb556781a4fae8b5d"
                      }}
                      style={styles.ImageBackground_160_750}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/127e/ccfc/6889054c147e7cb1944addc33fb22bc0"
                      }}
                      style={styles.ImageBackground_160_751}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ef4/b5ab/18760bbbd75222d42ec92626d69d2a2c"
                      }}
                      style={styles.ImageBackground_160_752}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47f7/63b2/6bbc4fac1b4d2471c00e989dc5daf5ce"
                      }}
                      style={styles.ImageBackground_160_753}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_160_754} />
          </View>
          <View style={styles.View_160_755}>
            <View style={styles.View_I160_755_49_741} />
            <View style={styles.View_I160_755_49_742}>
              <Text style={styles.Text_I160_755_49_742}>Read more 🡢</Text>
            </View>
            <View style={styles.View_I160_755_49_743}>
              <Text style={styles.Text_I160_755_49_743}>TechCrunch</Text>
            </View>
            <View style={styles.View_I160_755_75_0} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75fb/36e7/8ccf63c0cf5410491196c5a2eb014f38"
              }}
              style={styles.ImageBackground_I160_755_49_744}
            />
            <View style={styles.View_I160_755_49_745}>
              <View style={styles.View_I160_755_49_746}>
                <Text style={styles.Text_I160_755_49_746}>
                  Our team was inspired by the seven skills of highly effective
                  programmers created by the TechLead. We wanted to provide our
                  own take on the topic...
                </Text>
              </View>
              <View style={styles.View_I160_755_49_747}>
                <Text style={styles.Text_I160_755_49_747}>
                  7 Skills of Highly Effective Programmers
                </Text>
              </View>
            </View>
            <View style={styles.View_I160_755_49_748}>
              <Text style={styles.Text_I160_755_49_748}>3 days ago</Text>
            </View>
            <View style={styles.View_I160_755_49_750} />
            <View style={styles.View_I160_755_49_751}>
              <View style={styles.View_I160_755_49_752}>
                <View style={styles.View_I160_755_49_753}>
                  <View style={styles.View_I160_755_49_754}>
                    <View style={styles.View_I160_755_49_755}>
                      <View style={styles.View_I160_755_49_756}>
                        <View style={styles.View_I160_755_49_757}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f2/b42c/856138876ccc161616f5afb7753ccf4d"
                            }}
                            style={styles.ImageBackground_I160_755_49_758}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1271/45a9/676ad4449faf6399db359266ae7665c6"
                            }}
                            style={styles.ImageBackground_I160_755_49_760}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a0c/e997/fb8c2e362da711bd301f936f3687edee"
                            }}
                            style={styles.ImageBackground_I160_755_49_762}
                          />
                        </View>
                        <View style={styles.View_I160_755_49_764}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f119/2816/7d3b948a268bf9e20f7d6c8b60646bad"
                            }}
                            style={styles.ImageBackground_I160_755_49_765}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f20/e847/5eb93641b2838c092bbc39174ab3f1c7"
                            }}
                            style={styles.ImageBackground_I160_755_49_767}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0ca/4904/e565a7ffbc58bac8b6d6503abf6f4d66"
                            }}
                            style={styles.ImageBackground_I160_755_49_769}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4112/5f4e/e8306a8791649d712a937d5a76962d70"
                            }}
                            style={styles.ImageBackground_I160_755_49_771}
                          />
                          <View style={styles.View_I160_755_49_773}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a33e/ec5f/8b6a82a131831eb58b4a8b29b7fda11c"
                              }}
                              style={styles.ImageBackground_I160_755_49_774}
                            />
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a33e/ec5f/8b6a82a131831eb58b4a8b29b7fda11c"
                              }}
                              style={styles.ImageBackground_I160_755_49_776}
                            />
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a33e/ec5f/8b6a82a131831eb58b4a8b29b7fda11c"
                              }}
                              style={styles.ImageBackground_I160_755_49_778}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.View_I160_755_49_780}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                          }}
                          style={styles.ImageBackground_I160_755_49_781}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                          }}
                          style={styles.ImageBackground_I160_755_49_783}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                          }}
                          style={styles.ImageBackground_I160_755_49_785}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                          }}
                          style={styles.ImageBackground_I160_755_49_787}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                          }}
                          style={styles.ImageBackground_I160_755_49_789}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/090f/4601/88f9b0aa03a687a2d151674550a947f0"
                          }}
                          style={styles.ImageBackground_I160_755_49_791}
                        />
                        <View style={styles.View_I160_755_49_793}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b421/9511/4e0cd6d713d4dc80959bdf4c464a2866"
                            }}
                            style={styles.ImageBackground_I160_755_49_794}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_796}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178d/b4a4/01d29ceb8d6e6d163d7d18bf9cea54b0"
                            }}
                            style={styles.ImageBackground_I160_755_49_798}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_800}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_802}
                          />
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                          }}
                          style={styles.ImageBackground_I160_755_49_804}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                          }}
                          style={styles.ImageBackground_I160_755_49_806}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                          }}
                          style={styles.ImageBackground_I160_755_49_808}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                          }}
                          style={styles.ImageBackground_I160_755_49_810}
                        />
                        <View style={styles.View_I160_755_49_812}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                            }}
                            style={styles.ImageBackground_I160_755_49_813}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_815}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                            }}
                            style={styles.ImageBackground_I160_755_49_817}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_819}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_821}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                            }}
                            style={styles.ImageBackground_I160_755_49_823}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_825}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_827}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_829}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                            }}
                            style={styles.ImageBackground_I160_755_49_831}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_833}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_835}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_837}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_839}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_841}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_843}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3da5/02f0/5746f2c517801564b7ddb46f2662c89d"
                            }}
                            style={styles.ImageBackground_I160_755_49_845}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_847}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178d/b4a4/01d29ceb8d6e6d163d7d18bf9cea54b0"
                            }}
                            style={styles.ImageBackground_I160_755_49_849}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                            }}
                            style={styles.ImageBackground_I160_755_49_851}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f208/7d6a/dfef47b391a298fd7aafe20decc92e0b"
                            }}
                            style={styles.ImageBackground_I160_755_49_853}
                          />
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                          }}
                          style={styles.ImageBackground_I160_755_49_855}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                          }}
                          style={styles.ImageBackground_I160_755_49_857}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                          }}
                          style={styles.ImageBackground_I160_755_49_859}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                          }}
                          style={styles.ImageBackground_I160_755_49_861}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                          }}
                          style={styles.ImageBackground_I160_755_49_863}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                          }}
                          style={styles.ImageBackground_I160_755_49_865}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                          }}
                          style={styles.ImageBackground_I160_755_49_867}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                          }}
                          style={styles.ImageBackground_I160_755_49_869}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c824/6611/d53e7e538b252cce3908fb00f76ed745"
                          }}
                          style={styles.ImageBackground_I160_755_49_871}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I160_755_49_873}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7226/196e/5673ec01dd2f7ae420f4d12c111e350a"
                    }}
                    style={styles.ImageBackground_I160_755_49_874}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e12/8ae5/a127a0cc5c6bcbb38ddcaedcfd49ca0a"
                    }}
                    style={styles.ImageBackground_I160_755_49_876}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e12/8ae5/a127a0cc5c6bcbb38ddcaedcfd49ca0a"
                    }}
                    style={styles.ImageBackground_I160_755_49_878}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/327c/e728/5a304f1fbe5c27580c219ace1596cebd"
                    }}
                    style={styles.ImageBackground_I160_755_49_880}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7182/f822/bc1e768ca94117dd1f570ff068f2b3b9"
                    }}
                    style={styles.ImageBackground_I160_755_49_882}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38c9/6c22/6b26ea2c7d765d99bbccf77db2c07075"
                    }}
                    style={styles.ImageBackground_I160_755_49_884}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I160_755_49_749}>
              <Text style={styles.Text_I160_755_49_749}>PRODUCTIVITY</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_160_756}>
        <View style={styles.View_I160_756_50_1487}>
          <View style={styles.View_I160_756_49_886} />
          <View style={styles.View_I160_756_49_969}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9cb/609b/e8152c070ac291883ed1631414d94974"
              }}
              style={styles.ImageBackground_I160_756_49_965}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a205/7b69/85cc861e396345e8ad4f92379d8c9935"
            }}
            style={styles.ImageBackground_I160_756_49_983}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d1f/77b8/8765ca735c591fd9e2c63766ef659709"
            }}
            style={styles.ImageBackground_I160_756_49_999}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff07/6d5f/54b72e228e6628b64abc357fc6a88a06"
            }}
            style={styles.ImageBackground_I160_756_49_962}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17f3/0005/ac4965571d1d7b6e0c34ca0117ff03a7"
          }}
          style={styles.ImageBackground_I160_756_49_958}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a2d/63fc/408fb85c4bb6e63c8f409553279af0b4"
          }}
          style={styles.ImageBackground_I160_756_86_492}
        />
      </View>
      <View style={styles.View_160_757}>
        <View style={styles.View_I160_757_50_1743} />
        <View style={styles.View_I160_757_50_1745} />
        <View style={styles.View_I160_757_50_4482}>
          <View style={styles.View_I160_757_50_1744}>
            <Text style={styles.Text_I160_757_50_1744}>LIKE</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e14/b55c/a1203d3b92ae30a4082c38ce67094328"
            }}
            style={styles.ImageBackground_I160_757_50_1769}
          />
        </View>
        <View style={styles.View_I160_757_50_4481}>
          <View style={styles.View_I160_757_50_1768}>
            <Text style={styles.Text_I160_757_50_1768}>COMMENT</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9580/4d35/67cae9917739ebc7acb09f98b8db1d65"
            }}
            style={styles.ImageBackground_I160_757_50_2665}
          />
        </View>
      </View>
      <View style={styles.View_160_758}>
        <View style={styles.View_160_759} />
        <View style={styles.View_160_760}>
          <Text style={styles.Text_160_760}>Newsroom</Text>
        </View>
        <View style={styles.View_160_761}>
          <Text style={styles.Text_160_761}>Podcast</Text>
        </View>
        <View style={styles.View_160_762}>
          <Text style={styles.Text_160_762}>All</Text>
        </View>
        <View style={styles.View_160_763}>
          <Text style={styles.Text_160_763}>Tweets</Text>
        </View>
        <View style={styles.View_160_764}>
          <Text style={styles.Text_160_764}>Articles</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_160_513: {
    width: wp("84.8%"),
    minWidth: wp("84.8%"),
    height: hp("181.4207650273224%"),
    minHeight: hp("181.4207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("-15.027322404371585%")
  },
  View_160_514: {
    width: wp("84.8%"),
    minWidth: wp("84.8%"),
    height: hp("181.4207650273224%"),
    minHeight: hp("181.4207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_160_515: {
    flexGrow: 1,
    width: wp("84.8%"),
    height: hp("54.644808743169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("126.77595628415301%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_160_516: {
    flexGrow: 1,
    width: wp("84.8%"),
    height: hp("54.644808743169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_160_517: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    top: hp("49.31693989071037%")
  },
  Text_160_517: {
    color: "rgba(0, 122, 233, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_518: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("49.31693989071037%")
  },
  Text_160_518: {
    color: "rgba(0, 122, 233, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_160_519: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("48.087431693989075%")
  },
  View_160_520: {
    width: wp("71.73333333333333%"),
    minWidth: wp("71.73333333333333%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("28.41530054644808%")
  },
  View_160_521: {
    width: wp("71.73333333333333%"),
    minWidth: wp("71.73333333333333%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.377049180327873%")
  },
  Text_160_521: {
    color: "rgba(55, 74, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_522: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_160_522: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_523: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333333%"),
    top: hp("24.863387978142057%")
  },
  Text_160_523: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_524: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("25.000000000000014%")
  },
  Text_160_524: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_160_525: {
    flexGrow: 1,
    width: wp("84.8%"),
    height: hp("22.950819672131146%"),
    minHeight: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_160_526: {
    width: wp("32%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_160_527: {
    width: wp("31.24990234375%"),
    height: hp("14.726192703663976%"),
    top: hp("0.8347641574880384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.375%")
  },
  View_160_528: {
    width: wp("9.4%"),
    height: hp("13.11046933867241%"),
    top: hp("1.3211443124573208%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_529: {
    width: wp("9.1375%"),
    height: hp("0.9157274590163935%"),
    top: hp("12.194740837389006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_530: {
    width: wp("7.624997965494791%"),
    height: hp("12.710238805885524%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7749999999999986%")
  },
  View_160_546: {
    width: wp("29.70619099934896%"),
    height: hp("14.726192703663976%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5437500000000028%")
  },
  ImageBackground_160_547: {
    width: wp("23.53128662109375%"),
    height: hp("8.24474845427633%"),
    top: hp("0.7725616621841027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_552: {
    width: wp("12.003689575195313%"),
    height: hp("6.1492529071745325%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.310416666666661%")
  },
  View_160_557: {
    width: wp("17.650449625651042%"),
    height: hp("11.232069672131148%"),
    top: hp("2.069308588413591%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.055729166666666%")
  },
  View_160_558: {
    width: wp("17.5%"),
    height: hp("11.232069672131148%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.150390625%")
  },
  ImageBackground_160_559: {
    width: wp("14.087496948242187%"),
    height: hp("10.934298155737705%"),
    top: hp("0.003201844262306963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7062500000000043%")
  },
  ImageBackground_160_560: {
    width: wp("17.5%"),
    height: hp("0.29456967213114754%"),
    top: hp("10.937500000000014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_561: {
    width: wp("14.087496948242187%"),
    height: hp("1.0854252049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7062500000000043%")
  },
  View_160_562: {
    width: wp("1.1501118977864584%"),
    height: hp("0.5891393442622951%"),
    top: hp("10.07620389344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.174999999999997%")
  },
  ImageBackground_160_563: {
    width: wp("1.1501118977864584%"),
    height: hp("0.5891393442622951%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_565: {
    width: wp("0.475%"),
    height: hp("0.24334016393442623%"),
    top: hp("0.4130379098360635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.093750000000007%")
  },
  ImageBackground_160_566: {
    width: wp("0.475%"),
    height: hp("0.24334016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_568: {
    width: wp("0.475%"),
    height: hp("0.24334016393442623%"),
    top: hp("0.4130379098360635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8374999999999986%")
  },
  ImageBackground_160_569: {
    width: wp("0.475%"),
    height: hp("0.24334016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_571: {
    width: wp("13.650001017252606%"),
    height: hp("8.673796106557377%"),
    top: hp("1.0854252049180388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9249999999999972%")
  },
  View_160_572: {
    width: wp("17.24420166015625%"),
    height: hp("7.807831686051165%"),
    top: hp("1.4504354508196684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_573: {
    width: wp("7.276256306966146%"),
    height: hp("3.643196918925301%"),
    top: hp("1.5144723360655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_577: {
    width: wp("12.187498982747396%"),
    height: hp("1.168673155737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7567708333333343%")
  },
  ImageBackground_160_583: {
    width: wp("9.96875%"),
    height: hp("2.3981813524590163%"),
    top: hp("4.991675204918039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.275390625%")
  },
  View_160_590: {
    width: wp("3.599998982747396%"),
    height: hp("1.8442622950819672%"),
    top: hp("5.542392418032804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7567708333333343%")
  },
  ImageBackground_160_591: {
    width: wp("3.599998982747396%"),
    height: hp("1.8442622950819672%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_592: {
    width: wp("3.1819508870442705%"),
    height: hp("1.6300972693604852%"),
    top: hp("0.1132152119620855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2096354166666643%")
  },
  ImageBackground_160_597: {
    width: wp("7.112504069010416%"),
    height: hp("3.6437003338923217%"),
    top: hp("1.5144723360655803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.83177083333333%")
  },
  ImageBackground_160_601: {
    width: wp("12.187501017252604%"),
    height: hp("0.2977715163934426%"),
    top: hp("7.510059127390704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.755338541666667%")
  },
  ImageBackground_160_602: {
    width: wp("0.27499999999999997%"),
    height: hp("2.2989241803278686%"),
    top: hp("1.761014344262307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.856770833333336%")
  },
  ImageBackground_160_605: {
    width: wp("10.881251017252604%"),
    height: hp("5.574410860655737%"),
    top: hp("1.0854252049180388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0755208333333357%")
  },
  ImageBackground_160_608: {
    width: wp("3.0374989827473957%"),
    height: hp("5.510373975409836%"),
    top: hp("7.493232768741464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.918749999999996%")
  },
  View_160_609: {
    width: wp("8.818787638346354%"),
    height: hp("7.588369338238826%"),
    top: hp("6.8432583834955665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.681249999999999%")
  },
  View_160_610: {
    width: wp("8.181248982747395%"),
    height: hp("7.588369338238826%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3374999999999986%")
  },
  ImageBackground_160_611: {
    width: wp("8.181248982747395%"),
    height: hp("7.588369338238826%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_612: {
    width: wp("8.181248982747395%"),
    height: hp("0.7524313171053194%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_613: {
    width: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    top: hp("6.9928278688524586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6875%")
  },
  ImageBackground_160_614: {
    width: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_616: {
    width: wp("0.325%"),
    height: hp("0.16649590163934425%"),
    top: hp("0.2849641393442681%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4437500000000014%")
  },
  ImageBackground_160_617: {
    width: wp("0.325%"),
    height: hp("0.16649590163934425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_619: {
    width: wp("1.7437510172526043%"),
    height: hp("0.06403688524590163%"),
    top: hp("0.3361936475409806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.231250000000003%")
  },
  ImageBackground_160_620: {
    width: wp("7.875%"),
    height: hp("6.0226695785105555%"),
    top: hp("0.752433401639351%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15000000000000568%")
  },
  ImageBackground_160_621: {
    width: wp("5.075040690104167%"),
    height: hp("0.2305327868852459%"),
    top: hp("3.954277663934434%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1187499999999986%")
  },
  View_160_625: {
    width: wp("8.818787638346354%"),
    height: hp("6.195569168674489%"),
    top: hp("0.752433401639351%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_626: {
    width: wp("6.062537638346354%"),
    height: hp("0.8100665983606558%"),
    top: hp("3.621285860655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6812499999999986%")
  },
  ImageBackground_160_632: {
    width: wp("4.212501017252604%"),
    height: hp("1.011782786885246%"),
    top: hp("4.633068647540981%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1312500000000014%")
  },
  View_160_639: {
    width: wp("8.04378662109375%"),
    height: hp("3.8710302342482605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_640: {
    width: wp("6.2%"),
    height: hp("2.5902920081967213%"),
    top: hp("0.3746157786885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_641: {
    width: wp("3.175%"),
    height: hp("1.6265368852459015%"),
    top: hp("0.8644979508196542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0812500000000043%")
  },
  ImageBackground_160_646: {
    width: wp("5.5%"),
    height: hp("2.814421627690883%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48750000000000426%")
  },
  ImageBackground_160_647: {
    width: wp("7.55625%"),
    height: hp("3.8710302342482605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48750000000000426%")
  },
  ImageBackground_160_648: {
    width: wp("3.050001017252604%"),
    height: hp("1.5625%"),
    top: hp("4.633068647540981%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.768749999999997%")
  },
  ImageBackground_160_652: {
    width: wp("0.9062540690104167%"),
    height: hp("3.0577612704918034%"),
    top: hp("0.3746157786885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.756249999999994%")
  },
  ImageBackground_160_653: {
    width: wp("0.18125101725260417%"),
    height: hp("1.1174436475409837%"),
    top: hp("1.8154456967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.456249999999997%")
  },
  ImageBackground_160_654: {
    width: wp("2.9749999999999996%"),
    height: hp("3.973490292908716%"),
    top: hp("6.8432583834955665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.687499999999993%")
  },
  ImageBackground_160_655: {
    width: wp("13.9875%"),
    height: hp("0.29456967213114754%"),
    top: hp("14.431629285134903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6499999999999986%")
  },
  View_160_656: {
    flexGrow: 1,
    width: wp("84.8%"),
    height: hp("54.644808743169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63.387978142076506%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_160_657: {
    flexGrow: 1,
    width: wp("84.8%"),
    height: hp("54.644808743169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_160_658: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    top: hp("49.31693989071039%")
  },
  Text_160_658: {
    color: "rgba(0, 122, 233, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_659: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("49.31693989071039%")
  },
  Text_160_659: {
    color: "rgba(0, 122, 233, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_160_660: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("48.087431693989075%")
  },
  View_160_661: {
    width: wp("71.73333333333333%"),
    minWidth: wp("71.73333333333333%"),
    height: hp("17.759562841530055%"),
    minHeight: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("28.41530054644808%")
  },
  View_160_662: {
    width: wp("71.73333333333333%"),
    minWidth: wp("71.73333333333333%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.377049180327887%")
  },
  Text_160_662: {
    color: "rgba(55, 74, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_663: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_160_663: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_664: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.86666666666666%"),
    top: hp("24.863387978142086%")
  },
  Text_160_664: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_665: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("25%")
  },
  Text_160_665: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_666: {
    flexGrow: 1,
    width: wp("84.8%"),
    height: hp("22.950819672131146%"),
    minHeight: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_160_667: {
    width: wp("32%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_160_668: {
    width: wp("30.81514689127604%"),
    height: hp("16.00432265651682%"),
    top: hp("0.19221071337089768%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5992187499999986%")
  },
  ImageBackground_160_669: {
    width: wp("22.224951171875%"),
    height: hp("13.305478538971782%"),
    top: hp("2.698846202079068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.984895833333333%")
  },
  View_160_670: {
    width: wp("16.1839111328125%"),
    height: hp("10.666706522957222%"),
    top: hp("3.7453740020918787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.543229166666663%")
  },
  View_160_671: {
    width: wp("16.1839111328125%"),
    height: hp("10.666706522957222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_672: {
    width: wp("16.1839111328125%"),
    height: hp("10.666706522957222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_673: {
    width: wp("16.1839111328125%"),
    height: hp("10.666706522957222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_675: {
    width: wp("14.89289754231771%"),
    height: hp("8.141149718904755%"),
    top: hp("1.6467818796960358%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.784895833333337%")
  },
  ImageBackground_160_676: {
    width: wp("14.131250000000001%"),
    height: hp("5.939421106557377%"),
    top: hp("4.357609983350407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.05078125%")
  },
  ImageBackground_160_679: {
    width: wp("16.184283447265624%"),
    height: hp("10.673143564026212%"),
    top: hp("3.7453740020918787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.542838541666669%")
  },
  View_160_680: {
    width: wp("0.9917897542317708%"),
    height: hp("0.5084553702932889%"),
    top: hp("12.698914574795083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.82669270833334%")
  },
  ImageBackground_160_681: {
    width: wp("0.9917897542317708%"),
    height: hp("0.5084553702932889%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_683: {
    width: wp("16.08085428873698%"),
    height: hp("5.12192731346589%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2384114583333385%")
  },
  ImageBackground_160_684: {
    width: wp("14.990149943033854%"),
    height: hp("4.621619344409046%"),
    top: hp("0.5003048422558081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9454427083333314%")
  },
  View_160_685: {
    width: wp("16.08085428873698%"),
    height: hp("4.959454562494663%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_686: {
    width: wp("16.08085428873698%"),
    height: hp("4.959454562494663%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_687: {
    width: wp("16.08085428873698%"),
    height: hp("4.959454562494663%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_688: {
    width: wp("2.7086456298828123%"),
    height: hp("1.6347033078553248%"),
    top: hp("2.560383114007003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.390624999999993%")
  },
  ImageBackground_160_689: {
    width: wp("3.97021484375%"),
    height: hp("1.753002698304223%"),
    top: hp("1.5412877817622928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.955338541666663%")
  },
  ImageBackground_160_694: {
    width: wp("2.621515909830729%"),
    height: hp("1.4528079111067975%"),
    top: hp("0.9364727416325138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.979947916666667%")
  },
  ImageBackground_160_695: {
    width: wp("1.085761515299479%"),
    height: hp("0.5565346264448322%"),
    top: hp("2.0892450718280386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.441276041666661%")
  },
  View_160_696: {
    width: wp("5.1977783203125005%"),
    height: hp("2.6884318700905054%"),
    top: hp("5.313977517716879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.61731770833333%")
  },
  ImageBackground_160_697: {
    width: wp("4.410540771484375%"),
    height: hp("2.2594993883143357%"),
    top: hp("0.42893039724214077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_698: {
    width: wp("4.766347249348958%"),
    height: hp("2.441060217351861%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4313802083333371%")
  },
  View_160_703: {
    width: wp("9.025042724609374%"),
    height: hp("4.090107985533%"),
    top: hp("10.30503570056353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_704: {
    width: wp("7.736009724934896%"),
    height: hp("3.7007034802045977%"),
    top: hp("0.3894076321294335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2890625%")
  },
  ImageBackground_160_705: {
    width: wp("8.289076741536459%"),
    height: hp("3.974288148306758%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_710: {
    width: wp("8.76025187174479%"),
    height: hp("4.164137084627412%"),
    top: hp("5.921043854593577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.739322916666666%")
  },
  ImageBackground_160_711: {
    width: wp("8.110896809895833%"),
    height: hp("3.4985495395347717%"),
    top: hp("0.6655917141606977%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_712: {
    width: wp("8.721942138671874%"),
    height: hp("3.75710263278315%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03828125000000426%")
  },
  ImageBackground_160_715: {
    width: wp("8.040114339192709%"),
    height: hp("2.7360916137695312%"),
    top: hp("10.732515262124323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.075781250000006%")
  },
  View_160_718: {
    width: wp("10.243756103515626%"),
    height: hp("13.13143037056011%"),
    top: hp("1.2671632193476796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.157031250000003%")
  },
  ImageBackground_160_719: {
    width: wp("4.68125%"),
    height: hp("0.23693647540983606%"),
    top: hp("12.894485557014164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.5625%")
  },
  View_160_720: {
    width: wp("9.88211466471354%"),
    height: hp("12.897690528077508%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_721: {
    width: wp("2.2590047200520833%"),
    height: hp("0.9797653865293074%"),
    top: hp("11.917923057014164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.809374999999996%")
  },
  ImageBackground_160_724: {
    width: wp("1.7989440917968749%"),
    height: hp("1.3094730064517162%"),
    top: hp("11.549710966850242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.876041666666666%")
  },
  View_160_727: {
    width: wp("9.88211466471354%"),
    height: hp("12.231059673705387%"),
    top: hp("0.15433889920593913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_728: {
    width: wp("1.548333740234375%"),
    height: hp("1.5527733036729157%"),
    top: hp("1.0727512380464574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.522526041666659%")
  },
  ImageBackground_160_731: {
    width: wp("4.367728678385417%"),
    height: hp("3.640496405096002%"),
    top: hp("1.87949925823942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.23854166666667%")
  },
  ImageBackground_160_732: {
    width: wp("3.4347880045572916%"),
    height: hp("2.749291143782152%"),
    top: hp("1.8880458477416369%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.536718749999999%")
  },
  ImageBackground_160_733: {
    width: wp("3.817451985677083%"),
    height: hp("1.2359139697799266%"),
    top: hp("5.519996184468923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.797786458333327%")
  },
  ImageBackground_160_734: {
    width: wp("1.8985799153645833%"),
    height: hp("1.2383877905340144%"),
    top: hp("1.8866283646046824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.28268229166666%")
  },
  ImageBackground_160_735: {
    width: wp("4.024662272135417%"),
    height: hp("2.34803918932305%"),
    top: hp("1.8880208333333428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_736: {
    width: wp("2.0959574381510415%"),
    height: hp("1.1955323766489496%"),
    top: hp("1.8782568759605596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.15403645833333%")
  },
  ImageBackground_160_737: {
    width: wp("4.232071940104166%"),
    height: hp("6.022434547299245%"),
    top: hp("5.936477744514185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.649999999999999%")
  },
  ImageBackground_160_738: {
    width: wp("1.2659749348958333%"),
    height: hp("1.7514088114754098%"),
    top: hp("10.050597477480366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.268749999999997%")
  },
  ImageBackground_160_739: {
    width: wp("3.8992757161458336%"),
    height: hp("6.07201310454822%"),
    top: hp("6.155845767161885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9382812499999957%")
  },
  ImageBackground_160_740: {
    width: wp("2.8583740234375%"),
    height: hp("0.7907007561355341%"),
    top: hp("1.8860613713499035%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1624999999999943%")
  },
  ImageBackground_160_741: {
    width: wp("2.760455322265625%"),
    height: hp("0.8493837763051518%"),
    top: hp("1.8818089219390473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3062499999999986%")
  },
  ImageBackground_160_742: {
    width: wp("1.0835164388020835%"),
    height: hp("0.7875320038508847%"),
    top: hp("1.0727512380464574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.522526041666659%")
  },
  ImageBackground_160_743: {
    width: wp("3.3550150553385416%"),
    height: hp("1.7610314113846244%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.739713541666667%")
  },
  ImageBackground_160_744: {
    width: wp("3.0658732096354164%"),
    height: hp("6.73027559707725%"),
    top: hp("5.500785118895152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.196614583333336%")
  },
  ImageBackground_160_745: {
    width: wp("1.8812499999999999%"),
    height: hp("0.3073770491803279%"),
    top: hp("2.037040001707645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.125%")
  },
  ImageBackground_160_746: {
    width: wp("1.55625%"),
    height: hp("0.2305327868852459%"),
    top: hp("2.037040001707645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.300000000000004%")
  },
  ImageBackground_160_747: {
    width: wp("0.6102012634277344%"),
    height: hp("0.4231519386416576%"),
    top: hp("3.9992619081924516%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.197005208333337%")
  },
  ImageBackground_160_750: {
    width: wp("3.5328125000000004%"),
    height: hp("1.1917537678786314%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7381510416666686%")
  },
  ImageBackground_160_751: {
    width: wp("0.4787760734558106%"),
    height: hp("1.289438159087968%"),
    top: hp("5.654090089224731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.760416666666664%")
  },
  ImageBackground_160_752: {
    width: wp("0.36943562825520837%"),
    height: hp("1.0630122950819672%"),
    top: hp("5.63591295252732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.112499999999997%")
  },
  ImageBackground_160_753: {
    width: wp("0.7037150065104166%"),
    height: hp("0.4812602788372769%"),
    top: hp("0.8482635998335084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6552083333333343%")
  },
  View_160_754: {
    width: wp("231.2%"),
    minWidth: wp("231.2%"),
    height: hp("105.46448087431695%"),
    minHeight: hp("105.46448087431695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-114.93333333333334%"),
    top: hp("-15.300546448087431%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_160_755: {
    flexGrow: 1,
    width: wp("84.8%"),
    height: hp("61.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I160_755_49_741: {
    flexGrow: 1,
    width: wp("84.8%"),
    height: hp("61.065573770491795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_I160_755_49_742: {
    flexGrow: 1,
    width: wp("18.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    top: hp("49.4535519125683%")
  },
  Text_I160_755_49_742: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I160_755_49_743: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("49.4535519125683%")
  },
  Text_I160_755_49_743: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I160_755_75_0: {
    flexGrow: 1,
    width: wp("24.266666666666666%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666667%"),
    top: hp("24.043715846994537%"),
    backgroundColor: "rgba(255, 196, 51, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_I160_755_49_744: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("48.22404371584699%")
  },
  View_I160_755_49_745: {
    flexGrow: 1,
    width: wp("71.73333333333333%"),
    height: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("28.825136612021858%")
  },
  View_I160_755_49_746: {
    width: wp("71.73333333333333%"),
    minWidth: wp("71.73333333333333%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.3770491803278695%")
  },
  Text_I160_755_49_746: {
    color: "rgba(55, 74, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I160_755_49_747: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I160_755_49_747: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I160_755_49_748: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666667%"),
    top: hp("25.136612021857925%")
  },
  Text_I160_755_49_748: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I160_755_49_750: {
    flexGrow: 1,
    width: wp("84.8%"),
    height: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I160_755_49_751: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%"),
    top: hp("3.278688524590164%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I160_755_49_752: {
    width: wp("29.77703857421875%"),
    height: hp("15.737691993921832%"),
    top: hp("0.3278701031794302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1114583333333385%")
  },
  View_I160_755_49_753: {
    width: wp("29.77703857421875%"),
    height: hp("15.737691993921832%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I160_755_49_754: {
    width: wp("29.77703857421875%"),
    height: hp("15.737691993921832%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I160_755_49_755: {
    width: wp("29.77703857421875%"),
    height: hp("15.737691993921832%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I160_755_49_756: {
    width: wp("29.77703857421875%"),
    height: hp("15.737691993921832%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I160_755_49_757: {
    width: wp("29.29218953450521%"),
    height: hp("9.019041843101625%"),
    top: hp("6.7186511930872195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48489583333333286%")
  },
  ImageBackground_I160_755_49_758: {
    width: wp("29.29000447591146%"),
    height: hp("8.685992715137253%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I160_755_49_760: {
    width: wp("8.843291219075521%"),
    height: hp("2.62160379378522%"),
    top: hp("4.020811820942196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.248437499999994%")
  },
  ImageBackground_I160_755_49_762: {
    width: wp("29.291084798177085%"),
    height: hp("5.521804517735549%"),
    top: hp("3.497235240832053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0010416666666657193%")
  },
  View_I160_755_49_764: {
    width: wp("18.026074218749997%"),
    height: hp("11.73750038355426%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I160_755_49_765: {
    width: wp("17.577803548177084%"),
    height: hp("11.604367448983947%"),
    top: hp("0.13313501910433878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4483072916666657%")
  },
  ImageBackground_I160_755_49_767: {
    width: wp("17.8712890625%"),
    height: hp("11.722620979684297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I160_755_49_769: {
    width: wp("16.37281290690104%"),
    height: hp("10.73088515651682%"),
    top: hp("0.5699512085628005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.05078125%")
  },
  ImageBackground_I160_755_49_771: {
    width: wp("16.348630777994792%"),
    height: hp("5.822736708844294%"),
    top: hp("0.5699512085628005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.05078125%")
  },
  View_I160_755_49_773: {
    width: wp("2.3852203369140628%"),
    height: hp("0.9117013118306144%"),
    top: hp("1.1822393031719614%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.418098958333331%")
  },
  ImageBackground_I160_755_49_774: {
    width: wp("0.5677836100260416%"),
    height: hp("0.3741515790178476%"),
    top: hp("0.5375471271452366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I160_755_49_776: {
    width: wp("0.5677846272786459%"),
    height: hp("0.37414245918148853%"),
    top: hp("0.2688965510800898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9072916666666657%")
  },
  ImageBackground_I160_755_49_778: {
    width: wp("0.5704996744791667%"),
    height: hp("0.3746672406222651%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8147135416666629%")
  },
  View_I160_755_49_780: {
    width: wp("20.71711018880208%"),
    height: hp("6.157549873727267%"),
    top: hp("7.2030301953925475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5484374999999915%")
  },
  ImageBackground_I160_755_49_781: {
    width: wp("1.5307711283365886%"),
    height: hp("0.4548390706380208%"),
    top: hp("4.284046777610571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I160_755_49_783: {
    width: wp("1.5322357177734376%"),
    height: hp("0.4552726537152066%"),
    top: hp("0.8568143584037737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.510416666666671%")
  },
  ImageBackground_I160_755_49_785: {
    width: wp("1.532232666015625%"),
    height: hp("0.45527525938273783%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.388411458333337%")
  },
  ImageBackground_I160_755_49_787: {
    width: wp("2.02119140625%"),
    height: hp("0.5998913707628928%"),
    top: hp("1.8495028136206453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.979166666666671%")
  },
  ImageBackground_I160_755_49_789: {
    width: wp("2.024139404296875%"),
    height: hp("0.6007679173203766%"),
    top: hp("1.701801070750085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.253255208333343%")
  },
  ImageBackground_I160_755_49_791: {
    width: wp("3.2236348470052087%"),
    height: hp("0.9555451856936262%"),
    top: hp("0.9184040007044061%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.493489583333336%")
  },
  View_I160_755_49_793: {
    width: wp("5.564444986979167%"),
    height: hp("2.166694370123858%"),
    top: hp("0.20928304703509237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.753645833333337%")
  },
  ImageBackground_I160_755_49_794: {
    width: wp("2.9281819661458335%"),
    height: hp("0.8699125279494322%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4382812499999957%")
  },
  ImageBackground_I160_755_49_796: {
    width: wp("2.024147542317708%"),
    height: hp("0.6007679173203766%"),
    top: hp("0.6973224910881997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I160_755_49_798: {
    width: wp("3.4623819986979165%"),
    height: hp("1.0289520513815957%"),
    top: hp("0.35478352197532415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1020833333333258%")
  },
  ImageBackground_I160_755_49_800: {
    width: wp("2.0226623535156247%"),
    height: hp("0.6003291229081285%"),
    top: hp("1.2115812041068987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6638020833333371%")
  },
  ImageBackground_I160_755_49_802: {
    width: wp("2.0241414388020833%"),
    height: hp("0.600766875053364%"),
    top: hp("1.5659228048689378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86184895833334%")
  },
  ImageBackground_I160_755_49_804: {
    width: wp("2.024147542317708%"),
    height: hp("0.600766875053364%"),
    top: hp("1.3352482696699965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.313932291666667%")
  },
  ImageBackground_I160_755_49_806: {
    width: wp("1.5307698567708332%"),
    height: hp("0.45483802837100834%"),
    top: hp("1.2854362446102288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.072135416666669%")
  },
  ImageBackground_I160_755_49_808: {
    width: wp("1.5322306315104168%"),
    height: hp("0.4552716114481941%"),
    top: hp("1.7136245477394976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.632421875000006%")
  },
  ImageBackground_I160_755_49_810: {
    width: wp("2.0241465250651043%"),
    height: hp("0.600766875053364%"),
    top: hp("3.488830399643528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.859505208333339%")
  },
  View_I160_755_49_812: {
    width: wp("11.67598876953125%"),
    height: hp("4.015315946985464%"),
    top: hp("2.1422380958098532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9070312500000028%")
  },
  ImageBackground_I160_755_49_813: {
    width: wp("1.530768839518229%"),
    height: hp("0.454834901569971%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.287109375%")
  },
  ImageBackground_I160_755_49_815: {
    width: wp("2.0226826985677087%"),
    height: hp("0.600328080641116%"),
    top: hp("0.04980785599171744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.530338541666673%")
  },
  ImageBackground_I160_755_49_817: {
    width: wp("1.5322367350260415%"),
    height: hp("0.4552716114481941%"),
    top: hp("0.42818413406121913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.847395833333337%")
  },
  ImageBackground_I160_755_49_819: {
    width: wp("2.024139404296875%"),
    height: hp("0.6007658327863515%"),
    top: hp("0.4779961591209867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.090624999999996%")
  },
  ImageBackground_I160_755_49_821: {
    width: wp("2.021195475260417%"),
    height: hp("0.5998924130299053%"),
    top: hp("0.5640665690104165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.194140625000003%")
  },
  ImageBackground_I160_755_49_823: {
    width: wp("1.5322280883789061%"),
    height: hp("0.4552726537152066%"),
    top: hp("0.8563682681224383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4091145833333343%")
  },
  ImageBackground_I160_755_49_825: {
    width: wp("2.024144490559896%"),
    height: hp("0.6007679173203766%"),
    top: hp("0.906180293182206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6524739583333385%")
  },
  ImageBackground_I160_755_49_827: {
    width: wp("2.0226786295572916%"),
    height: hp("0.6003291229081285%"),
    top: hp("0.9184040007044056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.392187499999999%")
  },
  ImageBackground_I160_755_49_829: {
    width: wp("2.022660319010417%"),
    height: hp("0.600325996107091%"),
    top: hp("0.9922507030716357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.754427083333333%")
  },
  ImageBackground_I160_755_49_831: {
    width: wp("1.5322316487630208%"),
    height: hp("0.4552716114481941%"),
    top: hp("1.284998492464993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9694010416666714%")
  },
  ImageBackground_I160_755_49_833: {
    width: wp("2.0241490681966146%"),
    height: hp("0.6007679173203766%"),
    top: hp("1.3348105175247609%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2127604166666686%")
  },
  ImageBackground_I160_755_49_835: {
    width: wp("2.0226542154947915%"),
    height: hp("0.6003301651751409%"),
    top: hp("1.4204348371328548%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.316276041666669%")
  },
  ImageBackground_I160_755_49_837: {
    width: wp("2.024139404296875%"),
    height: hp("0.6007679173203766%"),
    top: hp("1.76299465158598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7744791666666728%")
  },
  ImageBackground_I160_755_49_839: {
    width: wp("2.0241465250651043%"),
    height: hp("0.6007658327863515%"),
    top: hp("1.7747806069629437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.514192708333333%")
  },
  ImageBackground_I160_755_49_841: {
    width: wp("2.022663370768229%"),
    height: hp("0.6003249538400786%"),
    top: hp("1.8490650614754096%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8765625000000057%")
  },
  ImageBackground_I160_755_49_843: {
    width: wp("2.024144490559896%"),
    height: hp("0.600766875053364%"),
    top: hp("2.2034066622374486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.07447916666667%")
  },
  ImageBackground_I160_755_49_845: {
    width: wp("6.4020029703776045%"),
    height: hp("1.904113436005806%"),
    top: hp("1.2548269469881315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.273958333333333%")
  },
  ImageBackground_I160_755_49_847: {
    width: wp("2.0241465250651043%"),
    height: hp("0.600766875053364%"),
    top: hp("2.6315782890945183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.636197916666667%")
  },
  ImageBackground_I160_755_49_849: {
    width: wp("3.4609146118164062%"),
    height: hp("1.0285153415033725%"),
    top: hp("2.277249195536629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I160_755_49_851: {
    width: wp("2.022674560546875%"),
    height: hp("0.6003270383741035%"),
    top: hp("3.0602043443690228%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1980468750000028%")
  },
  ImageBackground_I160_755_49_853: {
    width: wp("3.4623931884765624%"),
    height: hp("1.0289520513815957%"),
    top: hp("2.986361811069843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.397526041666673%")
  },
  ImageBackground_I160_755_49_855: {
    width: wp("1.5322367350260415%"),
    height: hp("0.4552716114481941%"),
    top: hp("3.8554207223360653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4382812500000028%")
  },
  ImageBackground_I160_755_49_857: {
    width: wp("1.5322265625%"),
    height: hp("0.45527004804767546%"),
    top: hp("0.428621886206455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.948697916666674%")
  },
  ImageBackground_I160_755_49_859: {
    width: wp("2.0241465250651043%"),
    height: hp("0.6007627059853142%"),
    top: hp("1.7634365727992658%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.875651041666671%")
  },
  ImageBackground_I160_755_49_861: {
    width: wp("2.0241536458333336%"),
    height: hp("0.6007679173203766%"),
    top: hp("2.9867995632150786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.936979166666674%")
  },
  ImageBackground_I160_755_49_863: {
    width: wp("2.0241495768229165%"),
    height: hp("0.6007679173203766%"),
    top: hp("2.632020210307804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.737500000000004%")
  },
  ImageBackground_I160_755_49_865: {
    width: wp("2.0226623535156247%"),
    height: hp("0.6003301651751409%"),
    top: hp("2.277674440477715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.53958333333334%")
  },
  ImageBackground_I160_755_49_867: {
    width: wp("2.024139404296875%"),
    height: hp("0.600766875053364%"),
    top: hp("2.1299852048113044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.814973958333333%")
  },
  ImageBackground_I160_755_49_869: {
    width: wp("2.0226765950520833%"),
    height: hp("0.6003301651751409%"),
    top: hp("2.5586112600858093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.376692708333337%")
  },
  ImageBackground_I160_755_49_871: {
    width: wp("2.558349609375%"),
    height: hp("0.75981160982059%"),
    top: hp("4.333858802670338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7075520833333329%")
  },
  View_I160_755_49_873: {
    width: wp("4.900658162434896%"),
    height: hp("1.771438056653966%"),
    top: hp("5.935316659062288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.005078124999997%")
  },
  ImageBackground_I160_755_49_874: {
    width: wp("0.9850858052571614%"),
    height: hp("0.7863722212327635%"),
    top: hp("0.9850632297536714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I160_755_49_876: {
    width: wp("0.25878601074218754%"),
    height: hp("0.16999270746616718%"),
    top: hp("1.3402928420103315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1998697916666643%")
  },
  ImageBackground_I160_755_49_878: {
    width: wp("0.3659688313802083%"),
    height: hp("0.21596189405097338%"),
    top: hp("0.7767474065061482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1432291666666643%")
  },
  ImageBackground_I160_755_49_880: {
    width: wp("0.7016698201497396%"),
    height: hp("0.8553854103296833%"),
    top: hp("0.41838265507599015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5832031249999972%")
  },
  ImageBackground_I160_755_49_882: {
    width: wp("1.1394749959309896%"),
    height: hp("1.1546129737395405%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6625000000000014%")
  },
  ImageBackground_I160_755_49_884: {
    width: wp("1.02913818359375%"),
    height: hp("0.520452384740277%"),
    top: hp("0.28868294804474015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8714843750000014%")
  },
  View_I160_755_49_749: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("24.59016393442623%")
  },
  Text_I160_755_49_749: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_756: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.86338797814209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_756_50_1487: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I160_756_49_886: {
    width: wp("100%"),
    height: hp("11.065573770491802%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I160_756_49_969: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("3.41530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333333%")
  },
  ImageBackground_I160_756_49_965: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I160_756_49_983: {
    width: wp("6.933333333333333%"),
    height: hp("3.5103552979849724%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%")
  },
  ImageBackground_I160_756_49_999: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_I160_756_49_962: {
    width: wp("7.1111109415690095%"),
    height: hp("3.278688524590164%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%")
  },
  ImageBackground_I160_756_49_958: {
    flexGrow: 1,
    width: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000001%"),
    top: hp("7.923497267759544%")
  },
  ImageBackground_I160_756_86_492: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.196721259362059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.200000000000003%"),
    top: hp("3.6885245901639223%")
  },
  View_160_757: {
    width: wp("84.8%"),
    minWidth: wp("84.8%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("40.02732240437158%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_757_50_1743: {
    flexGrow: 1,
    width: wp("42.4%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 196, 51, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 16
  },
  View_I160_757_50_1745: {
    flexGrow: 1,
    width: wp("42.4%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 0
  },
  View_I160_757_50_4482: {
    flexGrow: 1,
    width: wp("20.8%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("1.3661202185792405%")
  },
  View_I160_757_50_1744: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%")
  },
  Text_I160_757_50_1744: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I160_757_50_1769: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I160_757_50_4481: {
    flexGrow: 1,
    width: wp("29.86666666666667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.73333333333333%"),
    top: hp("1.3661202185792405%")
  },
  View_I160_757_50_1768: {
    width: wp("19.2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666664%")
  },
  Text_I160_757_50_1768: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I160_757_50_2665: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_758: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.524590163934427%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_160_759: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.524590163934427%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_160_760: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333333%"),
    top: hp("7.240437158469945%")
  },
  Text_160_760: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_160_761: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8%"),
    top: hp("10.51912568306011%")
  },
  Text_160_761: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_160_762: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.466666666666665%"),
    top: hp("10.51912568306011%")
  },
  Text_160_762: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_160_763: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.33333333333334%"),
    top: hp("10.51912568306011%")
  },
  Text_160_763: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_160_764: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.53333333333334%"),
    top: hp("10.51912568306011%")
  },
  Text_160_764: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
