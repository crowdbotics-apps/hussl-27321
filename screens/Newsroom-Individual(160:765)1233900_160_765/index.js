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
      <View style={styles.View_160_766} />
      <View style={styles.View_160_767}>
        <View style={styles.View_160_768} />
        <View style={styles.View_160_769}>
          <View style={styles.View_160_770}>
            <Text style={styles.Text_160_770}>
              Our team was inspired by the seven skills of highly effective
              programmers created by the TechLead. We wanted to provide our own
              take on the topic.
            </Text>
          </View>
          <View style={styles.View_160_771}>
            <Text style={styles.Text_160_771}>Heather Jones</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_160_772}>
        <View style={styles.View_160_773} />
        <View style={styles.View_160_774}>
          <View style={styles.View_160_775}>
            <Text style={styles.Text_160_775}>
              Our team was inspired by the seven skills of highly effective
              programmers created by the TechLead. We wanted to provide our own
              take on the topic.
            </Text>
          </View>
          <View style={styles.View_160_776}>
            <Text style={styles.Text_160_776}>Heather Jones</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_160_777}>
        <Text style={styles.Text_160_777}>TechCrunch</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75fb/36e7/8ccf63c0cf5410491196c5a2eb014f38"
        }}
        style={styles.ImageBackground_160_778}
      />
      <View style={styles.View_160_779}>
        <View style={styles.View_160_780}>
          <Text style={styles.Text_160_780}>
            Our team was inspired by the seven skills of highly effective
            programmers created by the TechLead. We wanted to provide our own
            take on the topic...
          </Text>
        </View>
        <View style={styles.View_160_781}>
          <Text style={styles.Text_160_781}>
            7 Skills of Highly Effective Programmers
          </Text>
        </View>
      </View>
      <View style={styles.View_160_782}>
        <Text style={styles.Text_160_782}>3 days ago</Text>
      </View>
      <View style={styles.View_160_783}>
        <Text style={styles.Text_160_783}>PRODUCTIVITY</Text>
      </View>
      <View style={styles.View_160_784}>
        <Text style={styles.Text_160_784}>Read more 🡢</Text>
      </View>
      <View style={styles.View_160_785} />
      <View style={styles.View_160_786}>
        <View style={styles.View_160_787}>
          <View style={styles.View_160_788}>
            <View style={styles.View_160_789}>
              <View style={styles.View_160_790}>
                <View style={styles.View_160_791}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f2/b42c/856138876ccc161616f5afb7753ccf4d"
                    }}
                    style={styles.ImageBackground_160_792}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1271/45a9/676ad4449faf6399db359266ae7665c6"
                    }}
                    style={styles.ImageBackground_160_794}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a0c/e997/fb8c2e362da711bd301f936f3687edee"
                    }}
                    style={styles.ImageBackground_160_796}
                  />
                </View>
                <View style={styles.View_160_798}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f119/2816/7d3b948a268bf9e20f7d6c8b60646bad"
                    }}
                    style={styles.ImageBackground_160_799}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f20/e847/5eb93641b2838c092bbc39174ab3f1c7"
                    }}
                    style={styles.ImageBackground_160_801}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0ca/4904/e565a7ffbc58bac8b6d6503abf6f4d66"
                    }}
                    style={styles.ImageBackground_160_803}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4112/5f4e/e8306a8791649d712a937d5a76962d70"
                    }}
                    style={styles.ImageBackground_160_805}
                  />
                  <View style={styles.View_160_807}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a33e/ec5f/8b6a82a131831eb58b4a8b29b7fda11c"
                      }}
                      style={styles.ImageBackground_160_808}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a33e/ec5f/8b6a82a131831eb58b4a8b29b7fda11c"
                      }}
                      style={styles.ImageBackground_160_810}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a33e/ec5f/8b6a82a131831eb58b4a8b29b7fda11c"
                      }}
                      style={styles.ImageBackground_160_812}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_160_814}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                  }}
                  style={styles.ImageBackground_160_815}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                  }}
                  style={styles.ImageBackground_160_817}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                  }}
                  style={styles.ImageBackground_160_819}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                  }}
                  style={styles.ImageBackground_160_821}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                  }}
                  style={styles.ImageBackground_160_823}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/090f/4601/88f9b0aa03a687a2d151674550a947f0"
                  }}
                  style={styles.ImageBackground_160_825}
                />
                <View style={styles.View_160_827}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b421/9511/4e0cd6d713d4dc80959bdf4c464a2866"
                    }}
                    style={styles.ImageBackground_160_828}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_830}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178d/b4a4/01d29ceb8d6e6d163d7d18bf9cea54b0"
                    }}
                    style={styles.ImageBackground_160_832}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_834}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_836}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                  }}
                  style={styles.ImageBackground_160_838}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                  }}
                  style={styles.ImageBackground_160_840}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                  }}
                  style={styles.ImageBackground_160_842}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                  }}
                  style={styles.ImageBackground_160_844}
                />
                <View style={styles.View_160_846}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                    }}
                    style={styles.ImageBackground_160_847}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_849}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                    }}
                    style={styles.ImageBackground_160_851}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_853}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_855}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                    }}
                    style={styles.ImageBackground_160_857}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_859}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_861}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_863}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                    }}
                    style={styles.ImageBackground_160_865}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_867}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_869}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_871}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_873}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_875}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_877}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3da5/02f0/5746f2c517801564b7ddb46f2662c89d"
                    }}
                    style={styles.ImageBackground_160_879}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_881}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/178d/b4a4/01d29ceb8d6e6d163d7d18bf9cea54b0"
                    }}
                    style={styles.ImageBackground_160_883}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                    }}
                    style={styles.ImageBackground_160_885}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f208/7d6a/dfef47b391a298fd7aafe20decc92e0b"
                    }}
                    style={styles.ImageBackground_160_887}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                  }}
                  style={styles.ImageBackground_160_889}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8230/56e2/cdb339e8397d7bd874616eada81e74f5"
                  }}
                  style={styles.ImageBackground_160_891}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                  }}
                  style={styles.ImageBackground_160_893}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                  }}
                  style={styles.ImageBackground_160_895}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                  }}
                  style={styles.ImageBackground_160_897}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                  }}
                  style={styles.ImageBackground_160_899}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                  }}
                  style={styles.ImageBackground_160_901}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/b067/0e569e5fb8945ee9e6cedf37c96e2620"
                  }}
                  style={styles.ImageBackground_160_903}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c824/6611/d53e7e538b252cce3908fb00f76ed745"
                  }}
                  style={styles.ImageBackground_160_905}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_160_907}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7226/196e/5673ec01dd2f7ae420f4d12c111e350a"
            }}
            style={styles.ImageBackground_160_908}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e12/8ae5/a127a0cc5c6bcbb38ddcaedcfd49ca0a"
            }}
            style={styles.ImageBackground_160_910}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e12/8ae5/a127a0cc5c6bcbb38ddcaedcfd49ca0a"
            }}
            style={styles.ImageBackground_160_912}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/327c/e728/5a304f1fbe5c27580c219ace1596cebd"
            }}
            style={styles.ImageBackground_160_914}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7182/f822/bc1e768ca94117dd1f570ff068f2b3b9"
            }}
            style={styles.ImageBackground_160_916}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38c9/6c22/6b26ea2c7d765d99bbccf77db2c07075"
            }}
            style={styles.ImageBackground_160_918}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("160_11"))
        }
      >
        <View style={styles.View_160_920} />
      </TouchableOpacity>
      <View style={styles.View_160_921}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec9/cd4d/d06dc5e29c86ed09dfcf167693416521"
          }}
          style={styles.ImageBackground_160_922}
        />
      </View>
      <View style={styles.View_160_925}>
        <Text style={styles.Text_160_925}>Comments</Text>
      </View>
      <View style={styles.View_160_926}>
        <View style={styles.View_160_927} />
        <View style={styles.View_160_928}>
          <View style={styles.View_160_929}>
            <Text style={styles.Text_160_929}>
              Our team was inspired by the seven skills of highly effective
              programmers created by the TechLead. We wanted to provide our own
              take on the topic.
            </Text>
          </View>
          <View style={styles.View_160_930}>
            <Text style={styles.Text_160_930}>Heather Jones</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_160_931}>
        <View style={styles.View_160_932} />
        <View style={styles.View_160_933}>
          <View style={styles.View_160_934}>
            <Text style={styles.Text_160_934}>
              Our team was inspired by the seven skills of highly effective
              programmers created by the TechLead. We wanted to provide our own
              take on the topic.
            </Text>
          </View>
          <View style={styles.View_160_935}>
            <Text style={styles.Text_160_935}>Heather Jones</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_160_936} />
      <View style={styles.View_160_937}>
        <View style={styles.View_160_938} />
        <View style={styles.View_160_939}>
          <Text style={styles.Text_160_939}>Type your comment...</Text>
        </View>
        <View style={styles.View_160_940} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97b3/08f5/ec79f3e39988503e9d5c4a1eb3789bbd"
          }}
          style={styles.ImageBackground_160_941}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("151.50273224043715%") },
  View_160_766: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("104.0983606557377%"),
    minHeight: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_160_767: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("98.90710382513662%")
  },
  View_160_768: {
    width: wp("89.06666666666668%"),
    height: hp("16.666666666666664%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 245, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_160_769: {
    width: wp("81.6%"),
    minWidth: wp("81.6%"),
    height: hp("12.704918032786885%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    top: hp("2.0491803278688394%")
  },
  View_160_770: {
    width: wp("81.6%"),
    minWidth: wp("81.6%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.3224043715847102%")
  },
  Text_160_770: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_771: {
    width: wp("28.58978068033854%"),
    minWidth: wp("28.58978068033854%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_160_771: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_772: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("116.66666666666667%")
  },
  View_160_773: {
    width: wp("89.06666666666668%"),
    height: hp("16.666666666666664%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 245, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_160_774: {
    width: wp("81.6%"),
    minWidth: wp("81.6%"),
    height: hp("12.704918032786885%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    top: hp("2.0491803278688536%")
  },
  View_160_775: {
    width: wp("81.6%"),
    minWidth: wp("81.6%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.322404371584682%")
  },
  Text_160_775: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_776: {
    width: wp("28.58978068033854%"),
    minWidth: wp("28.58978068033854%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_160_776: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_777: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("56.69398907103825%")
  },
  Text_160_777: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_160_778: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("55.46448087431693%")
  },
  View_160_779: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("37.97814207650273%")
  },
  View_160_780: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.377049180327873%")
  },
  Text_160_780: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_781: {
    width: wp("83.67285970052083%"),
    minWidth: wp("83.67285970052083%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_160_781: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_782: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    top: hp("33.87978142076503%")
  },
  Text_160_782: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_783: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("33.87978142076503%")
  },
  Text_160_783: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_784: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("56.69398907103825%")
  },
  Text_160_784: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_785: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("22.950819672131146%"),
    minHeight: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896176%"),
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_160_786: {
    width: wp("29.77703857421875%"),
    height: hp("15.737691993921832%"),
    top: hp("10.437145128927595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.24479166666667%")
  },
  View_160_787: {
    width: wp("29.77703857421875%"),
    height: hp("15.737691993921832%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_788: {
    width: wp("29.77703857421875%"),
    height: hp("15.737691993921832%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_789: {
    width: wp("29.77703857421875%"),
    height: hp("15.737691993921832%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_790: {
    width: wp("29.77703857421875%"),
    height: hp("15.737691993921832%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_791: {
    width: wp("29.29218953450521%"),
    height: hp("9.019041843101625%"),
    top: hp("6.718653277621245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48489583333333286%")
  },
  ImageBackground_160_792: {
    width: wp("29.29000447591146%"),
    height: hp("8.685992715137253%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_794: {
    width: wp("8.843291219075521%"),
    height: hp("2.62160379378522%"),
    top: hp("4.020815990010245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.248437499999994%")
  },
  ImageBackground_160_796: {
    width: wp("29.291084798177085%"),
    height: hp("5.521804517735549%"),
    top: hp("3.497231071764002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0010416666666657193%")
  },
  View_160_798: {
    width: wp("18.026074218749997%"),
    height: hp("11.73750038355426%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_799: {
    width: wp("17.577803548177084%"),
    height: hp("11.604367448983947%"),
    top: hp("0.1331433572404368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4483072916666657%")
  },
  ImageBackground_160_801: {
    width: wp("17.8712890625%"),
    height: hp("11.722620979684297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_803: {
    width: wp("16.37281290690104%"),
    height: hp("10.73088515651682%"),
    top: hp("0.5699449549607252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.05078125%")
  },
  ImageBackground_160_805: {
    width: wp("16.348630777994792%"),
    height: hp("5.822736708844294%"),
    top: hp("0.5699449549607252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.05078125%")
  },
  View_160_807: {
    width: wp("2.3852203369140628%"),
    height: hp("0.9117013118306144%"),
    top: hp("1.1822476413080611%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.418098958333331%")
  },
  ImageBackground_160_808: {
    width: wp("0.5677836100260416%"),
    height: hp("0.3741515790178476%"),
    top: hp("0.5375429580771858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_810: {
    width: wp("0.5677846272786459%"),
    height: hp("0.37414245918148853%"),
    top: hp("0.26888821294398824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9072916666666657%")
  },
  ImageBackground_160_812: {
    width: wp("0.5704996744791667%"),
    height: hp("0.3746672406222651%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8147135416666629%")
  },
  View_160_814: {
    width: wp("20.71711018880208%"),
    height: hp("6.157549873727267%"),
    top: hp("7.203032279926569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5484374999999915%")
  },
  ImageBackground_160_815: {
    width: wp("1.5307711283365886%"),
    height: hp("0.4548390706380208%"),
    top: hp("4.284050946678622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_817: {
    width: wp("1.5322357177734376%"),
    height: hp("0.4552726537152066%"),
    top: hp("0.8568101893357252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.510416666666671%")
  },
  ImageBackground_160_819: {
    width: wp("1.532232666015625%"),
    height: hp("0.45527525938273783%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.388411458333337%")
  },
  ImageBackground_160_821: {
    width: wp("2.02119140625%"),
    height: hp("0.5998913707628928%"),
    top: hp("1.8494986445525967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.979166666666671%")
  },
  ImageBackground_160_823: {
    width: wp("2.024139404296875%"),
    height: hp("0.6007679173203766%"),
    top: hp("1.7017969016820373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.253255208333343%")
  },
  ImageBackground_160_825: {
    width: wp("3.2236348470052087%"),
    height: hp("0.9555451856936262%"),
    top: hp("0.9184123388405077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.493489583333336%")
  },
  View_160_827: {
    width: wp("5.564444986979167%"),
    height: hp("2.166694370123858%"),
    top: hp("0.20928721610314582%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.753645833333337%")
  },
  ImageBackground_160_828: {
    width: wp("2.9281819661458335%"),
    height: hp("0.8699125279494322%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4382812499999957%")
  },
  ImageBackground_160_830: {
    width: wp("2.024147542317708%"),
    height: hp("0.6007679173203766%"),
    top: hp("0.6973183220201484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_832: {
    width: wp("3.4623819986979165%"),
    height: hp("1.0289520513815957%"),
    top: hp("0.3547876910433736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1020833333333258%")
  },
  ImageBackground_160_834: {
    width: wp("2.0226623535156247%"),
    height: hp("0.6003291229081285%"),
    top: hp("1.2115812041068992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6638020833333371%")
  },
  ImageBackground_160_836: {
    width: wp("2.0241414388020833%"),
    height: hp("0.600766875053364%"),
    top: hp("1.5659186358008839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86184895833334%")
  },
  ImageBackground_160_838: {
    width: wp("2.024147542317708%"),
    height: hp("0.600766875053364%"),
    top: hp("1.335252438738049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.313932291666667%")
  },
  ImageBackground_160_840: {
    width: wp("1.5307698567708332%"),
    height: hp("0.45483802837100834%"),
    top: hp("1.2854404136782804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.072135416666669%")
  },
  ImageBackground_160_842: {
    width: wp("1.5322306315104168%"),
    height: hp("0.4552716114481941%"),
    top: hp("1.7136203786714503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.632421875000006%")
  },
  ImageBackground_160_844: {
    width: wp("2.0241465250651043%"),
    height: hp("0.600766875053364%"),
    top: hp("3.48882623057548%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.859505208333339%")
  },
  View_160_846: {
    width: wp("11.67598876953125%"),
    height: hp("4.015315946985464%"),
    top: hp("2.142233926741806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9070312500000028%")
  },
  ImageBackground_160_847: {
    width: wp("1.530768839518229%"),
    height: hp("0.454834901569971%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.287109375%")
  },
  ImageBackground_160_849: {
    width: wp("2.0226826985677087%"),
    height: hp("0.600328080641116%"),
    top: hp("0.04981202505976867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.530338541666673%")
  },
  ImageBackground_160_851: {
    width: wp("1.5322367350260415%"),
    height: hp("0.4552716114481941%"),
    top: hp("0.4281799649931699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.847395833333337%")
  },
  ImageBackground_160_853: {
    width: wp("2.024139404296875%"),
    height: hp("0.6007658327863515%"),
    top: hp("0.477991990052935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.090624999999996%")
  },
  ImageBackground_160_855: {
    width: wp("2.021195475260417%"),
    height: hp("0.5998924130299053%"),
    top: hp("0.5640582308743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.194140625000003%")
  },
  ImageBackground_160_857: {
    width: wp("1.5322280883789061%"),
    height: hp("0.4552726537152066%"),
    top: hp("0.8563766062585394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4091145833333343%")
  },
  ImageBackground_160_859: {
    width: wp("2.024144490559896%"),
    height: hp("0.6007679173203766%"),
    top: hp("0.9061886313183045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6524739583333385%")
  },
  ImageBackground_160_861: {
    width: wp("2.0226786295572916%"),
    height: hp("0.6003291229081285%"),
    top: hp("0.9184123388405041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.392187499999999%")
  },
  ImageBackground_160_863: {
    width: wp("2.022660319010417%"),
    height: hp("0.600325996107091%"),
    top: hp("0.9922548721396858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.754427083333333%")
  },
  ImageBackground_160_865: {
    width: wp("1.5322316487630208%"),
    height: hp("0.4552716114481941%"),
    top: hp("1.2850068306010947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9694010416666714%")
  },
  ImageBackground_160_867: {
    width: wp("2.0241490681966146%"),
    height: hp("0.6007679173203766%"),
    top: hp("1.3348021793886602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2127604166666686%")
  },
  ImageBackground_160_869: {
    width: wp("2.0226542154947915%"),
    height: hp("0.6003301651751409%"),
    top: hp("1.4204348371328557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.316276041666669%")
  },
  ImageBackground_160_871: {
    width: wp("2.024139404296875%"),
    height: hp("0.6007679173203766%"),
    top: hp("1.7629988206540297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7744791666666728%")
  },
  ImageBackground_160_873: {
    width: wp("2.0241465250651043%"),
    height: hp("0.6007658327863515%"),
    top: hp("1.7747889450990435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.514192708333333%")
  },
  ImageBackground_160_875: {
    width: wp("2.022663370768229%"),
    height: hp("0.6003249538400786%"),
    top: hp("1.849065061475411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8765625000000057%")
  },
  ImageBackground_160_877: {
    width: wp("2.024144490559896%"),
    height: hp("0.600766875053364%"),
    top: hp("2.203402493169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.07447916666667%")
  },
  ImageBackground_160_879: {
    width: wp("6.4020029703776045%"),
    height: hp("1.904113436005806%"),
    top: hp("1.2548227779200793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.273958333333333%")
  },
  ImageBackground_160_881: {
    width: wp("2.0241465250651043%"),
    height: hp("0.600766875053364%"),
    top: hp("2.631582458162569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.636197916666667%")
  },
  ImageBackground_160_883: {
    width: wp("3.4609146118164062%"),
    height: hp("1.0285153415033725%"),
    top: hp("2.277245026468581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_885: {
    width: wp("2.022674560546875%"),
    height: hp("0.6003270383741035%"),
    top: hp("3.0602126825051243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1980468750000028%")
  },
  ImageBackground_160_887: {
    width: wp("3.4623931884765624%"),
    height: hp("1.0289520513815957%"),
    top: hp("2.986353472933743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.397526041666673%")
  },
  ImageBackground_160_889: {
    width: wp("1.5322367350260415%"),
    height: hp("0.4552716114481941%"),
    top: hp("3.855420722336067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4382812500000028%")
  },
  ImageBackground_160_891: {
    width: wp("1.5322265625%"),
    height: hp("0.45527004804767546%"),
    top: hp("0.42863022434255527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.948697916666674%")
  },
  ImageBackground_160_893: {
    width: wp("2.0241465250651043%"),
    height: hp("0.6007627059853142%"),
    top: hp("1.763432403731219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.875651041666671%")
  },
  ImageBackground_160_895: {
    width: wp("2.0241536458333336%"),
    height: hp("0.6007679173203766%"),
    top: hp("2.986803732283132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.936979166666674%")
  },
  ImageBackground_160_897: {
    width: wp("2.0241495768229165%"),
    height: hp("0.6007679173203766%"),
    top: hp("2.632016041239755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.737500000000004%")
  },
  ImageBackground_160_899: {
    width: wp("2.0226623535156247%"),
    height: hp("0.6003301651751409%"),
    top: hp("2.2776786095457666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.53958333333334%")
  },
  ImageBackground_160_901: {
    width: wp("2.024139404296875%"),
    height: hp("0.600766875053364%"),
    top: hp("2.129993542947407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.814973958333333%")
  },
  ImageBackground_160_903: {
    width: wp("2.0226765950520833%"),
    height: hp("0.6003301651751409%"),
    top: hp("2.5586070910177625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.376692708333337%")
  },
  ImageBackground_160_905: {
    width: wp("2.558349609375%"),
    height: hp("0.75981160982059%"),
    top: hp("4.333862971738391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7075520833333329%")
  },
  View_160_907: {
    width: wp("4.900658162434896%"),
    height: hp("1.771438056653966%"),
    top: hp("5.93531874359631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.005078124999997%")
  },
  ImageBackground_160_908: {
    width: wp("0.9850858052571614%"),
    height: hp("0.7863722212327635%"),
    top: hp("0.9850673988217231%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_910: {
    width: wp("0.25878601074218754%"),
    height: hp("0.16999270746616718%"),
    top: hp("1.3402886729422825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1998697916666643%")
  },
  ImageBackground_160_912: {
    width: wp("0.3659688313802083%"),
    height: hp("0.21596189405097338%"),
    top: hp("0.7767474065061499%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1432291666666643%")
  },
  ImageBackground_160_914: {
    width: wp("0.7016698201497396%"),
    height: hp("0.8553854103296833%"),
    top: hp("0.4183909932120926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5832031249999972%")
  },
  ImageBackground_160_916: {
    width: wp("1.1394749959309896%"),
    height: hp("1.1546129737395405%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6625000000000014%")
  },
  ImageBackground_160_918: {
    width: wp("1.02913818359375%"),
    height: hp("0.520452384740277%"),
    top: hp("0.28868294804474104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8714843750000014%")
  },
  View_160_920: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("8.333333333333332%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_160_921: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("9.426229508196721%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_160_922: {
    width: wp("3.2006797790527344%"),
    height: hp("1.6396565515486918%"),
    top: hp("0.819488692153346%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.599609375%")
  },
  View_160_925: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("62.295081967213115%")
  },
  Text_160_925: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_160_926: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("63.387978142076506%")
  },
  View_160_927: {
    width: wp("89.06666666666668%"),
    height: hp("16.666666666666664%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 245, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_160_928: {
    width: wp("81.6%"),
    minWidth: wp("81.6%"),
    height: hp("12.704918032786885%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    top: hp("2.0491803278688536%")
  },
  View_160_929: {
    width: wp("81.6%"),
    minWidth: wp("81.6%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.322404371584696%")
  },
  Text_160_929: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_930: {
    width: wp("28.58978068033854%"),
    minWidth: wp("28.58978068033854%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_160_930: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_931: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("81.14754098360656%")
  },
  View_160_932: {
    width: wp("89.06666666666668%"),
    height: hp("16.666666666666664%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 245, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_160_933: {
    width: wp("81.6%"),
    minWidth: wp("81.6%"),
    height: hp("12.704918032786885%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    top: hp("2.0491803278688536%")
  },
  View_160_934: {
    width: wp("81.6%"),
    minWidth: wp("81.6%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.322404371584696%")
  },
  Text_160_934: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_935: {
    width: wp("28.58978068033854%"),
    minWidth: wp("28.58978068033854%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_160_935: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_936: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("132.5136612021858%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5
  },
  View_160_937: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("136.20218579234972%")
  },
  View_160_938: {
    width: wp("89.06666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 245, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_160_939: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999999%"),
    top: hp("1.3661202185792263%")
  },
  Text_160_939: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_940: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 196, 51, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_160_941: {
    width: wp("4.2724248250325525%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.60000000000001%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
