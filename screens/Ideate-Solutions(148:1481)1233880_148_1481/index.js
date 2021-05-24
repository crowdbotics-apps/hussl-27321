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
      <View style={styles.View_153_1307}>
        <View style={styles.View_I153_1307_148_2819} />
        <View style={styles.View_I153_1307_148_2821}>
          <Text style={styles.Text_I153_1307_148_2821}>Airbnb Solution</Text>
        </View>
        <View style={styles.View_I153_1307_148_2822}>
          <Text style={styles.Text_I153_1307_148_2822}>3d</Text>
        </View>
        <View style={styles.View_I153_1307_148_2823}>
          <Text style={styles.Text_I153_1307_148_2823}>
            A web platform where users can rent out their space to host
            travellers to: save money, make...
          </Text>
        </View>
        <View style={styles.View_I153_1307_153_9}>
          <View style={styles.View_I153_1307_153_8} />
          <View style={styles.View_I153_1307_148_2839}>
            <Text style={styles.Text_I153_1307_148_2839}>aIRBNB PROBLEMS</Text>
          </View>
        </View>
        <View style={styles.View_I153_1307_153_257}>
          <View style={styles.View_I153_1307_153_256}>
            <Text style={styles.Text_I153_1307_153_256}>John Tan</Text>
          </View>
          <View style={styles.View_I153_1307_153_255}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/c7af/f2269a4f067f745f3f07a71701f80db0"
              }}
              style={styles.ImageBackground_I153_1307_148_2825}
            />
            <View style={styles.View_I153_1307_153_254}>
              <View style={styles.View_I153_1307_148_2836}>
                <Text style={styles.Text_I153_1307_148_2836}>3</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9d2/0b6e/2c314d586b2051bbc0d2a1f9bb9a45d8"
                }}
                style={styles.ImageBackground_I153_1307_148_2837}
              />
            </View>
            <View style={styles.View_I153_1307_153_164}>
              <View style={styles.View_I153_1307_153_165}>
                <Text style={styles.Text_I153_1307_153_165}>325</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
                }}
                style={styles.ImageBackground_I153_1307_153_166}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_153_1308}>
        <View style={styles.View_I153_1308_153_1271} />
        <View style={styles.View_I153_1308_153_1272}>
          <Text style={styles.Text_I153_1308_153_1272}>Uber Solution</Text>
        </View>
        <View style={styles.View_I153_1308_153_1273}>
          <Text style={styles.Text_I153_1308_153_1273}>3d</Text>
        </View>
        <View style={styles.View_I153_1308_153_1274}>
          <Text style={styles.Text_I153_1308_153_1274}>
            On demand car service for professionals, convenience of a cab with
            the experience of a...{" "}
          </Text>
        </View>
        <View style={styles.View_I153_1308_153_1275}>
          <View style={styles.View_I153_1308_153_1276} />
          <View style={styles.View_I153_1308_153_1277}>
            <Text style={styles.Text_I153_1308_153_1277}>UBER PROBLEMS</Text>
          </View>
        </View>
        <View style={styles.View_I153_1308_153_1278}>
          <View style={styles.View_I153_1308_153_1279}>
            <Text style={styles.Text_I153_1308_153_1279}>John Tan</Text>
          </View>
          <View style={styles.View_I153_1308_153_1280}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/c7af/f2269a4f067f745f3f07a71701f80db0"
              }}
              style={styles.ImageBackground_I153_1308_153_1281}
            />
            <View style={styles.View_I153_1308_153_1282}>
              <View style={styles.View_I153_1308_153_1283}>
                <Text style={styles.Text_I153_1308_153_1283}>3</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9d2/0b6e/2c314d586b2051bbc0d2a1f9bb9a45d8"
                }}
                style={styles.ImageBackground_I153_1308_153_1284}
              />
            </View>
            <View style={styles.View_I153_1308_153_1285}>
              <View style={styles.View_I153_1308_153_1286}>
                <Text style={styles.Text_I153_1308_153_1286}>325</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
                }}
                style={styles.ImageBackground_I153_1308_153_1287}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_148_1484}>
        <Text style={styles.Text_148_1484}>ARTIFICIAL INTELLIGENCE</Text>
      </View>
      <View style={styles.View_148_1485}>
        <Text style={styles.Text_148_1485}>Ideate</Text>
      </View>
      <View style={styles.View_148_1487}>
        <Text style={styles.Text_148_1487}>Problems</Text>
      </View>
      <View style={styles.View_148_1488}>
        <Text style={styles.Text_148_1488}>Solutions</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/290f/757a/aaad00f7ce15d33156dfd529dc19d575"
        }}
        style={styles.ImageBackground_148_1489}
      />
      <View style={styles.View_148_1491}>
        <Text style={styles.Text_148_1491}>CONSUMER</Text>
      </View>
      <View style={styles.View_148_1492}>
        <Text style={styles.Text_148_1492}>EDUCATION</Text>
      </View>
      <View style={styles.View_148_1496}>
        <Text style={styles.Text_148_1496}>Pitches</Text>
      </View>
      <View style={styles.View_153_1233}>
        <View style={styles.View_148_2819} />
        <View style={styles.View_148_2821}>
          <Text style={styles.Text_148_2821}>Airbnb Solution</Text>
        </View>
        <View style={styles.View_148_2822}>
          <Text style={styles.Text_148_2822}>3d</Text>
        </View>
        <View style={styles.View_148_2823}>
          <Text style={styles.Text_148_2823}>
            A web platform where users can rent out their space to host
            travellers to: save money, make...
          </Text>
        </View>
        <View style={styles.View_153_9}>
          <View style={styles.View_153_8} />
          <View style={styles.View_148_2839}>
            <Text style={styles.Text_148_2839}>aIRBNB PROBLEMS</Text>
          </View>
        </View>
        <View style={styles.View_153_257}>
          <View style={styles.View_153_256}>
            <Text style={styles.Text_153_256}>John Tan</Text>
          </View>
          <View style={styles.View_153_255}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/c7af/f2269a4f067f745f3f07a71701f80db0"
              }}
              style={styles.ImageBackground_148_2825}
            />
            <View style={styles.View_153_254}>
              <View style={styles.View_148_2836}>
                <Text style={styles.Text_148_2836}>3</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9d2/0b6e/2c314d586b2051bbc0d2a1f9bb9a45d8"
                }}
                style={styles.ImageBackground_148_2837}
              />
            </View>
            <View style={styles.View_153_164}>
              <View style={styles.View_153_165}>
                <Text style={styles.Text_153_165}>325</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
                }}
                style={styles.ImageBackground_153_166}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_153_1234}>
        <View style={styles.View_I153_1234_148_2819} />
        <View style={styles.View_I153_1234_148_2821}>
          <Text style={styles.Text_I153_1234_148_2821}>Airbnb Solution</Text>
        </View>
        <View style={styles.View_I153_1234_148_2822}>
          <Text style={styles.Text_I153_1234_148_2822}>3d</Text>
        </View>
        <View style={styles.View_I153_1234_148_2823}>
          <Text style={styles.Text_I153_1234_148_2823}>
            A web platform where users can rent out their space to host
            travellers to: save money, make...
          </Text>
        </View>
        <View style={styles.View_I153_1234_153_9}>
          <View style={styles.View_I153_1234_153_8} />
          <View style={styles.View_I153_1234_148_2839}>
            <Text style={styles.Text_I153_1234_148_2839}>aIRBNB PROBLEMS</Text>
          </View>
        </View>
        <View style={styles.View_I153_1234_153_257}>
          <View style={styles.View_I153_1234_153_256}>
            <Text style={styles.Text_I153_1234_153_256}>John Tan</Text>
          </View>
          <View style={styles.View_I153_1234_153_255}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/c7af/f2269a4f067f745f3f07a71701f80db0"
              }}
              style={styles.ImageBackground_I153_1234_148_2825}
            />
            <View style={styles.View_I153_1234_153_254}>
              <View style={styles.View_I153_1234_148_2836}>
                <Text style={styles.Text_I153_1234_148_2836}>3</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9d2/0b6e/2c314d586b2051bbc0d2a1f9bb9a45d8"
                }}
                style={styles.ImageBackground_I153_1234_148_2837}
              />
            </View>
            <View style={styles.View_I153_1234_153_164}>
              <View style={styles.View_I153_1234_153_165}>
                <Text style={styles.Text_I153_1234_153_165}>325</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
                }}
                style={styles.ImageBackground_I153_1234_153_166}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_153_1288}>
        <View style={styles.View_153_1271} />
        <View style={styles.View_153_1272}>
          <Text style={styles.Text_153_1272}>Uber Solution</Text>
        </View>
        <View style={styles.View_153_1273}>
          <Text style={styles.Text_153_1273}>3d</Text>
        </View>
        <View style={styles.View_153_1274}>
          <Text style={styles.Text_153_1274}>
            On demand car service for professionals, convenience of a cab with
            the experience of a...{" "}
          </Text>
        </View>
        <View style={styles.View_153_1275}>
          <View style={styles.View_153_1276} />
          <View style={styles.View_153_1277}>
            <Text style={styles.Text_153_1277}>UBER PROBLEMS</Text>
          </View>
        </View>
        <View style={styles.View_153_1278}>
          <View style={styles.View_153_1279}>
            <Text style={styles.Text_153_1279}>John Tan</Text>
          </View>
          <View style={styles.View_153_1280}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/c7af/f2269a4f067f745f3f07a71701f80db0"
              }}
              style={styles.ImageBackground_153_1281}
            />
            <View style={styles.View_153_1282}>
              <View style={styles.View_153_1283}>
                <Text style={styles.Text_153_1283}>3</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9d2/0b6e/2c314d586b2051bbc0d2a1f9bb9a45d8"
                }}
                style={styles.ImageBackground_153_1284}
              />
            </View>
            <View style={styles.View_153_1285}>
              <View style={styles.View_153_1286}>
                <Text style={styles.Text_153_1286}>325</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
                }}
                style={styles.ImageBackground_153_1287}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_153_1289}>
        <View style={styles.View_I153_1289_153_1271} />
        <View style={styles.View_I153_1289_153_1272}>
          <Text style={styles.Text_I153_1289_153_1272}>Uber Solution</Text>
        </View>
        <View style={styles.View_I153_1289_153_1273}>
          <Text style={styles.Text_I153_1289_153_1273}>3d</Text>
        </View>
        <View style={styles.View_I153_1289_153_1274}>
          <Text style={styles.Text_I153_1289_153_1274}>
            On demand car service for professionals, convenience of a cab with
            the experience of a...{" "}
          </Text>
        </View>
        <View style={styles.View_I153_1289_153_1275}>
          <View style={styles.View_I153_1289_153_1276} />
          <View style={styles.View_I153_1289_153_1277}>
            <Text style={styles.Text_I153_1289_153_1277}>UBER PROBLEMS</Text>
          </View>
        </View>
        <View style={styles.View_I153_1289_153_1278}>
          <View style={styles.View_I153_1289_153_1279}>
            <Text style={styles.Text_I153_1289_153_1279}>John Tan</Text>
          </View>
          <View style={styles.View_I153_1289_153_1280}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/c7af/f2269a4f067f745f3f07a71701f80db0"
              }}
              style={styles.ImageBackground_I153_1289_153_1281}
            />
            <View style={styles.View_I153_1289_153_1282}>
              <View style={styles.View_I153_1289_153_1283}>
                <Text style={styles.Text_I153_1289_153_1283}>3</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9d2/0b6e/2c314d586b2051bbc0d2a1f9bb9a45d8"
                }}
                style={styles.ImageBackground_I153_1289_153_1284}
              />
            </View>
            <View style={styles.View_I153_1289_153_1285}>
              <View style={styles.View_I153_1289_153_1286}>
                <Text style={styles.Text_I153_1289_153_1286}>325</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
                }}
                style={styles.ImageBackground_I153_1289_153_1287}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_183_364}>
        <View style={styles.View_I183_364_183_2} />
        <View style={styles.View_I183_364_183_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f14e/6b00/755138e92cdc74371060852ded59091b"
            }}
            style={styles.ImageBackground_I183_364_183_4}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a2d/63fc/408fb85c4bb6e63c8f409553279af0b4"
          }}
          style={styles.ImageBackground_I183_364_183_16}
        />
        <View style={styles.View_I183_364_183_302}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f31/89a1/e2656eed01423039d3027bbcdf28091a"
            }}
            style={styles.ImageBackground_I183_364_183_303}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df9/a63d/9cb84191775c9ad96f06cc94de757391"
            }}
            style={styles.ImageBackground_I183_364_183_304}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f61e/e9c0/d187098a1363bad1307f336697e12e63"
        }}
        style={styles.ImageBackground_183_443}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_153_1307: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("87.97814207650273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_1307_148_2819: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 153, 204, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I153_1307_148_2821: {
    flexGrow: 1,
    width: wp("29.06666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.639344262295083%")
  },
  Text_I153_1307_148_2821: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7000000000000001,
    textTransform: "none"
  },
  View_I153_1307_148_2822: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%"),
    top: hp("1.639344262295083%")
  },
  Text_I153_1307_148_2822: {
    color: "rgba(222, 222, 222, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_1307_148_2823: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("8.606557377049185%")
  },
  Text_I153_1307_148_2823: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_1307_153_9: {
    flexGrow: 1,
    width: wp("32.800000000000004%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("5.054644808743163%")
  },
  View_I153_1307_153_8: {
    width: wp("32.800000000000004%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_I153_1307_148_2839: {
    width: wp("28.53333333333333%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%")
  },
  Text_I153_1307_148_2839: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I153_1307_153_257: {
    flexGrow: 1,
    width: wp("56.427001953125%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("17.076502732240428%")
  },
  View_I153_1307_153_256: {
    width: wp("12.533333333333333%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%")
  },
  Text_I153_1307_153_256: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_1307_153_255: {
    width: wp("56.427001953125%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I153_1307_148_2825: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_1307_153_254: {
    width: wp("7.6923828125%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.73463541666666%")
  },
  View_I153_1307_148_2836: {
    width: wp("1.866666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.825716145833333%")
  },
  Text_I153_1307_148_2836: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_1307_148_2837: {
    width: wp("3.692412567138672%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_1307_153_164: {
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%")
  },
  View_I153_1307_153_165: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.60130208333333%")
  },
  Text_I153_1307_153_165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_1307_153_166: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_1308: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("87.97814207650273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_1308_153_1271: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 153, 204, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I153_1308_153_1272: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.639344262295083%")
  },
  Text_I153_1308_153_1272: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7000000000000001,
    textTransform: "none"
  },
  View_I153_1308_153_1273: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%"),
    top: hp("1.639344262295083%")
  },
  Text_I153_1308_153_1273: {
    color: "rgba(222, 222, 222, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_1308_153_1274: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("8.606557377049185%")
  },
  Text_I153_1308_153_1274: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_1308_153_1275: {
    flexGrow: 1,
    width: wp("29.06666666666667%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("5.054644808743163%")
  },
  View_I153_1308_153_1276: {
    width: wp("29.06666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_I153_1308_153_1277: {
    width: wp("24.8%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%")
  },
  Text_I153_1308_153_1277: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I153_1308_153_1278: {
    flexGrow: 1,
    width: wp("56.427001953125%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("17.076502732240428%")
  },
  View_I153_1308_153_1279: {
    width: wp("12.533333333333333%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%")
  },
  Text_I153_1308_153_1279: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_1308_153_1280: {
    width: wp("56.427001953125%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I153_1308_153_1281: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_1308_153_1282: {
    width: wp("7.6923828125%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.73463541666666%")
  },
  View_I153_1308_153_1283: {
    width: wp("1.866666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.82571614583334%")
  },
  Text_I153_1308_153_1283: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_1308_153_1284: {
    width: wp("3.692412567138672%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_1308_153_1285: {
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%")
  },
  View_I153_1308_153_1286: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333323%")
  },
  Text_I153_1308_153_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_1308_153_1287: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_148_1484: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("84.69945355191257%")
  },
  Text_148_1484: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1485: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("12.158469945355192%")
  },
  Text_148_1485: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_148_1487: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("20.62841530054645%")
  },
  Text_148_1487: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_148_1488: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("20.62841530054645%")
  },
  Text_148_1488: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_148_1489: {
    width: wp("18.933333333333334%"),
    height: hp("0%"),
    top: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%")
  },
  View_148_1491: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("27.595628415300546%")
  },
  Text_148_1491: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1492: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("56.14754098360656%")
  },
  Text_148_1492: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1496: {
    width: wp("14.666666666666666%"),
    top: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%")
  },
  Text_148_1496: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_153_1233: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("30.87431693989071%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_148_2819: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 153, 204, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_148_2821: {
    flexGrow: 1,
    width: wp("29.06666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.6393442622950758%")
  },
  Text_148_2821: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7000000000000001,
    textTransform: "none"
  },
  View_148_2822: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%"),
    top: hp("1.6393442622950758%")
  },
  Text_148_2822: {
    color: "rgba(222, 222, 222, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2823: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("8.606557377049178%")
  },
  Text_148_2823: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_9: {
    flexGrow: 1,
    width: wp("32.800000000000004%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("5.05464480874317%")
  },
  View_153_8: {
    width: wp("32.800000000000004%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_148_2839: {
    width: wp("28.53333333333333%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%")
  },
  Text_148_2839: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_153_257: {
    flexGrow: 1,
    width: wp("56.427001953125%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("17.076502732240435%")
  },
  View_153_256: {
    width: wp("12.533333333333333%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%")
  },
  Text_153_256: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_255: {
    width: wp("56.427001953125%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_148_2825: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_254: {
    width: wp("7.6923828125%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.73463541666666%")
  },
  View_148_2836: {
    width: wp("1.866666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.825716145833333%")
  },
  Text_148_2836: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_148_2837: {
    width: wp("3.692412567138672%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_164: {
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%")
  },
  View_153_165: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.60130208333333%")
  },
  Text_153_165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_153_166: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_1234: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("59.42622950819673%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_1234_148_2819: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 153, 204, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I153_1234_148_2821: {
    flexGrow: 1,
    width: wp("29.06666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.6393442622950687%")
  },
  Text_I153_1234_148_2821: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7000000000000001,
    textTransform: "none"
  },
  View_I153_1234_148_2822: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%"),
    top: hp("1.6393442622950687%")
  },
  Text_I153_1234_148_2822: {
    color: "rgba(222, 222, 222, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_1234_148_2823: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("8.606557377049171%")
  },
  Text_I153_1234_148_2823: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_1234_153_9: {
    flexGrow: 1,
    width: wp("32.800000000000004%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("5.054644808743163%")
  },
  View_I153_1234_153_8: {
    width: wp("32.800000000000004%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_I153_1234_148_2839: {
    width: wp("28.53333333333333%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%")
  },
  Text_I153_1234_148_2839: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I153_1234_153_257: {
    flexGrow: 1,
    width: wp("56.427001953125%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("17.076502732240428%")
  },
  View_I153_1234_153_256: {
    width: wp("12.533333333333333%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%")
  },
  Text_I153_1234_153_256: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_1234_153_255: {
    width: wp("56.427001953125%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I153_1234_148_2825: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_1234_153_254: {
    width: wp("7.6923828125%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.73463541666666%")
  },
  View_I153_1234_148_2836: {
    width: wp("1.866666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.825716145833333%")
  },
  Text_I153_1234_148_2836: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_1234_148_2837: {
    width: wp("3.692412567138672%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_1234_153_164: {
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%")
  },
  View_I153_1234_153_165: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.60130208333333%")
  },
  Text_I153_1234_153_165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_1234_153_166: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_1288: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("59.42622950819673%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_153_1271: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 153, 204, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_153_1272: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.6393442622950687%")
  },
  Text_153_1272: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7000000000000001,
    textTransform: "none"
  },
  View_153_1273: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%"),
    top: hp("1.6393442622950687%")
  },
  Text_153_1273: {
    color: "rgba(222, 222, 222, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1274: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("8.606557377049171%")
  },
  Text_153_1274: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1275: {
    flexGrow: 1,
    width: wp("29.06666666666667%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("5.054644808743163%")
  },
  View_153_1276: {
    width: wp("29.06666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_153_1277: {
    width: wp("24.8%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%")
  },
  Text_153_1277: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_153_1278: {
    flexGrow: 1,
    width: wp("56.427001953125%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("17.076502732240428%")
  },
  View_153_1279: {
    width: wp("12.533333333333333%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%")
  },
  Text_153_1279: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1280: {
    width: wp("56.427001953125%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_153_1281: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_1282: {
    width: wp("7.6923828125%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.73463541666666%")
  },
  View_153_1283: {
    width: wp("1.866666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.82571614583334%")
  },
  Text_153_1283: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_153_1284: {
    width: wp("3.692412567138672%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_1285: {
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%")
  },
  View_153_1286: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333323%")
  },
  Text_153_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_153_1287: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_1289: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%"),
    top: hp("30.87431693989071%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_1289_153_1271: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 153, 204, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I153_1289_153_1272: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.6393442622950758%")
  },
  Text_I153_1289_153_1272: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7000000000000001,
    textTransform: "none"
  },
  View_I153_1289_153_1273: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%"),
    top: hp("1.6393442622950758%")
  },
  Text_I153_1289_153_1273: {
    color: "rgba(222, 222, 222, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_1289_153_1274: {
    flexGrow: 1,
    width: wp("56.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("8.606557377049178%")
  },
  Text_I153_1289_153_1274: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_1289_153_1275: {
    flexGrow: 1,
    width: wp("29.06666666666667%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("5.05464480874317%")
  },
  View_I153_1289_153_1276: {
    width: wp("29.06666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_I153_1289_153_1277: {
    width: wp("24.8%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%")
  },
  Text_I153_1289_153_1277: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I153_1289_153_1278: {
    flexGrow: 1,
    width: wp("56.427001953125%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("17.076502732240435%")
  },
  View_I153_1289_153_1279: {
    width: wp("12.533333333333333%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%")
  },
  Text_I153_1289_153_1279: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_1289_153_1280: {
    width: wp("56.427001953125%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I153_1289_153_1281: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_1289_153_1282: {
    width: wp("7.6923828125%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.73463541666666%")
  },
  View_I153_1289_153_1283: {
    width: wp("1.866666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.82571614583334%")
  },
  Text_I153_1289_153_1283: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_1289_153_1284: {
    width: wp("3.692412567138672%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_1289_153_1285: {
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%")
  },
  View_I153_1289_153_1286: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333323%")
  },
  Text_I153_1289_153_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_1289_153_1287: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_364: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("99.86338797814209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_364_183_2: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I183_364_183_3: {
    flexGrow: 1,
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I183_364_183_4: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I183_364_183_16: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.196721259362059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    top: hp("3.961748633879779%")
  },
  View_I183_364_183_302: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_I183_364_183_303: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I183_364_183_304: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  ImageBackground_183_443: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%"),
    top: hp("12.158469945355192%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
