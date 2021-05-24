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
      <View style={styles.View_342_615}>
        <View style={styles.View_342_481}>
          <View style={styles.View_342_482}>
            <View style={styles.View_I342_482_342_53} />
            <View style={styles.View_I342_482_342_54}>
              <Text style={styles.Text_I342_482_342_54}>“</Text>
            </View>
            <View style={styles.View_I342_482_342_55}>
              <Text style={styles.Text_I342_482_342_55}>“</Text>
            </View>
            <View style={styles.View_I342_482_342_56}>
              <Text style={styles.Text_I342_482_342_56}>3d</Text>
            </View>
            <View style={styles.View_I342_482_342_57}>
              <View style={styles.View_I342_482_342_58}>
                <Text style={styles.Text_I342_482_342_58}>2</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ba/6313/5bebd25ebbd80dd79f90303762664b0e"
              }}
              style={styles.ImageBackground_I342_482_342_61}
            />
            <View style={styles.View_I342_482_342_62}>
              <View style={styles.View_I342_482_342_63}>
                <Text style={styles.Text_I342_482_342_63}>325 Likes</Text>
              </View>
            </View>
            <View style={styles.View_I342_482_342_65}>
              <Text style={styles.Text_I342_482_342_65}>John Tan</Text>
            </View>
            <View style={styles.View_I342_482_342_67}>
              <Text style={styles.Text_I342_482_342_67}>
                Hotels are too expensive
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0f/bd75/1411181c74a84b051eff2c2301e2befa"
              }}
              style={styles.ImageBackground_I342_482_342_68}
            />
          </View>
          <View style={styles.View_342_483}>
            <View style={styles.View_I342_483_342_53} />
            <View style={styles.View_I342_483_342_54}>
              <Text style={styles.Text_I342_483_342_54}>“</Text>
            </View>
            <View style={styles.View_I342_483_342_55}>
              <Text style={styles.Text_I342_483_342_55}>“</Text>
            </View>
            <View style={styles.View_I342_483_342_56}>
              <Text style={styles.Text_I342_483_342_56}>3d</Text>
            </View>
            <View style={styles.View_I342_483_342_57}>
              <View style={styles.View_I342_483_342_58}>
                <Text style={styles.Text_I342_483_342_58}>2</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ba/6313/5bebd25ebbd80dd79f90303762664b0e"
              }}
              style={styles.ImageBackground_I342_483_342_61}
            />
            <View style={styles.View_I342_483_342_62}>
              <View style={styles.View_I342_483_342_63}>
                <Text style={styles.Text_I342_483_342_63}>325 Likes</Text>
              </View>
            </View>
            <View style={styles.View_I342_483_342_65}>
              <Text style={styles.Text_I342_483_342_65}>John Tan</Text>
            </View>
            <View style={styles.View_I342_483_342_67}>
              <Text style={styles.Text_I342_483_342_67}>
                Hotels are too expensive
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0f/bd75/1411181c74a84b051eff2c2301e2befa"
              }}
              style={styles.ImageBackground_I342_483_342_68}
            />
          </View>
        </View>
        <View style={styles.View_342_490}>
          <Text style={styles.Text_342_490}>CONSUMER</Text>
        </View>
        <View style={styles.View_342_491}>
          <Text style={styles.Text_342_491}>EDUCATION</Text>
        </View>
        <View style={styles.View_342_492}>
          <Text style={styles.Text_342_492}>ARTIFICIAL INTELLIGENCE</Text>
        </View>
        <View style={styles.View_342_500}>
          <View style={styles.View_I342_500_342_53} />
          <View style={styles.View_I342_500_342_54}>
            <Text style={styles.Text_I342_500_342_54}>“</Text>
          </View>
          <View style={styles.View_I342_500_342_55}>
            <Text style={styles.Text_I342_500_342_55}>“</Text>
          </View>
          <View style={styles.View_I342_500_342_56}>
            <Text style={styles.Text_I342_500_342_56}>3d</Text>
          </View>
          <View style={styles.View_I342_500_342_57}>
            <View style={styles.View_I342_500_342_58}>
              <Text style={styles.Text_I342_500_342_58}>2</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ba/6313/5bebd25ebbd80dd79f90303762664b0e"
            }}
            style={styles.ImageBackground_I342_500_342_61}
          />
          <View style={styles.View_I342_500_342_62}>
            <View style={styles.View_I342_500_342_63}>
              <Text style={styles.Text_I342_500_342_63}>325 Likes</Text>
            </View>
          </View>
          <View style={styles.View_I342_500_342_65}>
            <Text style={styles.Text_I342_500_342_65}>John Tan</Text>
          </View>
          <View style={styles.View_I342_500_342_67}>
            <Text style={styles.Text_I342_500_342_67}>
              Hotels are too expensive
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0f/bd75/1411181c74a84b051eff2c2301e2befa"
            }}
            style={styles.ImageBackground_I342_500_342_68}
          />
        </View>
        <View style={styles.View_342_501}>
          <View style={styles.View_I342_501_342_53} />
          <View style={styles.View_I342_501_342_54}>
            <Text style={styles.Text_I342_501_342_54}>“</Text>
          </View>
          <View style={styles.View_I342_501_342_55}>
            <Text style={styles.Text_I342_501_342_55}>“</Text>
          </View>
          <View style={styles.View_I342_501_342_56}>
            <Text style={styles.Text_I342_501_342_56}>3d</Text>
          </View>
          <View style={styles.View_I342_501_342_57}>
            <View style={styles.View_I342_501_342_58}>
              <Text style={styles.Text_I342_501_342_58}>2</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ba/6313/5bebd25ebbd80dd79f90303762664b0e"
            }}
            style={styles.ImageBackground_I342_501_342_61}
          />
          <View style={styles.View_I342_501_342_62}>
            <View style={styles.View_I342_501_342_63}>
              <Text style={styles.Text_I342_501_342_63}>325 Likes</Text>
            </View>
          </View>
          <View style={styles.View_I342_501_342_65}>
            <Text style={styles.Text_I342_501_342_65}>John Tan</Text>
          </View>
          <View style={styles.View_I342_501_342_67}>
            <Text style={styles.Text_I342_501_342_67}>
              Hotels are too expensive
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0f/bd75/1411181c74a84b051eff2c2301e2befa"
            }}
            style={styles.ImageBackground_I342_501_342_68}
          />
        </View>
        <View style={styles.View_342_502}>
          <View style={styles.View_342_503}>
            <View style={styles.View_I342_503_342_53} />
            <View style={styles.View_I342_503_342_54}>
              <Text style={styles.Text_I342_503_342_54}>“</Text>
            </View>
            <View style={styles.View_I342_503_342_55}>
              <Text style={styles.Text_I342_503_342_55}>“</Text>
            </View>
            <View style={styles.View_I342_503_342_56}>
              <Text style={styles.Text_I342_503_342_56}>3d</Text>
            </View>
            <View style={styles.View_I342_503_342_57}>
              <View style={styles.View_I342_503_342_58}>
                <Text style={styles.Text_I342_503_342_58}>2</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ba/6313/5bebd25ebbd80dd79f90303762664b0e"
              }}
              style={styles.ImageBackground_I342_503_342_61}
            />
            <View style={styles.View_I342_503_342_62}>
              <View style={styles.View_I342_503_342_63}>
                <Text style={styles.Text_I342_503_342_63}>325 Likes</Text>
              </View>
            </View>
            <View style={styles.View_I342_503_342_65}>
              <Text style={styles.Text_I342_503_342_65}>John Tan</Text>
            </View>
            <View style={styles.View_I342_503_342_67}>
              <Text style={styles.Text_I342_503_342_67}>
                Hotels are too expensive
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0f/bd75/1411181c74a84b051eff2c2301e2befa"
              }}
              style={styles.ImageBackground_I342_503_342_68}
            />
          </View>
          <View style={styles.View_342_504}>
            <View style={styles.View_I342_504_342_53} />
            <View style={styles.View_I342_504_342_54}>
              <Text style={styles.Text_I342_504_342_54}>“</Text>
            </View>
            <View style={styles.View_I342_504_342_55}>
              <Text style={styles.Text_I342_504_342_55}>“</Text>
            </View>
            <View style={styles.View_I342_504_342_56}>
              <Text style={styles.Text_I342_504_342_56}>3d</Text>
            </View>
            <View style={styles.View_I342_504_342_57}>
              <View style={styles.View_I342_504_342_58}>
                <Text style={styles.Text_I342_504_342_58}>2</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ba/6313/5bebd25ebbd80dd79f90303762664b0e"
              }}
              style={styles.ImageBackground_I342_504_342_61}
            />
            <View style={styles.View_I342_504_342_62}>
              <View style={styles.View_I342_504_342_63}>
                <Text style={styles.Text_I342_504_342_63}>325 Likes</Text>
              </View>
            </View>
            <View style={styles.View_I342_504_342_65}>
              <Text style={styles.Text_I342_504_342_65}>John Tan</Text>
            </View>
            <View style={styles.View_I342_504_342_67}>
              <Text style={styles.Text_I342_504_342_67}>
                Hotels are too expensive
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0f/bd75/1411181c74a84b051eff2c2301e2befa"
              }}
              style={styles.ImageBackground_I342_504_342_68}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_342_614} />
      <View style={styles.View_342_498}>
        <View style={styles.View_I342_498_183_2} />
        <View style={styles.View_I342_498_183_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acc1/bc07/d0659af62ba20de29b5a604198a24139"
            }}
            style={styles.ImageBackground_I342_498_183_4}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a2d/63fc/408fb85c4bb6e63c8f409553279af0b4"
          }}
          style={styles.ImageBackground_I342_498_183_16}
        />
        <View style={styles.View_I342_498_183_302}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f31/89a1/e2656eed01423039d3027bbcdf28091a"
            }}
            style={styles.ImageBackground_I342_498_183_303}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df9/a63d/9cb84191775c9ad96f06cc94de757391"
            }}
            style={styles.ImageBackground_I342_498_183_304}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f61e/e9c0/d187098a1363bad1307f336697e12e63"
        }}
        style={styles.ImageBackground_342_499}
      />
      <View style={styles.View_342_505}>
        <Text style={styles.Text_342_505}>hussl.</Text>
      </View>
      <View style={styles.View_342_609}>
        <Text style={styles.Text_342_609}>Ideate</Text>
      </View>
      <View style={styles.View_342_610}>
        <Text style={styles.Text_342_610}>Solutions</Text>
      </View>
      <View style={styles.View_342_611}>
        <Text style={styles.Text_342_611}>Problems</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dd4/297b/c5f800e1abb10640148322509456bcba"
        }}
        style={styles.ImageBackground_342_612}
      />
      <View style={styles.View_342_613}>
        <Text style={styles.Text_342_613}>Pitches</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_342_615: {
    width: wp("128%"),
    minWidth: wp("128%"),
    height: hp("75.5464480874317%"),
    minHeight: hp("75.5464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("23.36065573770492%")
  },
  View_342_481: {
    width: wp("128%"),
    minWidth: wp("128%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.00546448087432%")
  },
  View_342_482: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I342_482_342_53: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I342_482_342_54: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666654%"),
    top: hp("2.868852459016381%")
  },
  Text_I342_482_342_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_I342_482_342_55: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666666%"),
    top: hp("0%")
  },
  Text_I342_482_342_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_I342_482_342_56: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    top: hp("2.7322404371584668%")
  },
  Text_I342_482_342_56: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_482_342_57: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.800000000000004%"),
    top: hp("14.754098360655732%")
  },
  View_I342_482_342_58: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I342_482_342_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I342_482_342_61: {
    flexGrow: 1,
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("13.93442622950819%")
  },
  View_I342_482_342_62: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("14.754098360655732%")
  },
  View_I342_482_342_63: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I342_482_342_63: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_482_342_65: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.4%"),
    top: hp("15.300546448087417%")
  },
  Text_I342_482_342_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_482_342_67: {
    flexGrow: 1,
    width: wp("50.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("5.054644808743163%")
  },
  Text_I342_482_342_67: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_I342_482_342_68: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666667%"),
    top: hp("19.945355191256823%")
  },
  View_342_483: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I342_483_342_53: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I342_483_342_54: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("2.868852459016381%")
  },
  Text_I342_483_342_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_I342_483_342_55: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666666%"),
    top: hp("0%")
  },
  Text_I342_483_342_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_I342_483_342_56: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.80000000000001%"),
    top: hp("2.7322404371584668%")
  },
  Text_I342_483_342_56: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_483_342_57: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.79999999999998%"),
    top: hp("14.754098360655732%")
  },
  View_I342_483_342_58: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I342_483_342_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I342_483_342_61: {
    flexGrow: 1,
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("13.93442622950819%")
  },
  View_I342_483_342_62: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("14.754098360655732%")
  },
  View_I342_483_342_63: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I342_483_342_63: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_483_342_65: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.400000000000006%"),
    top: hp("15.300546448087417%")
  },
  Text_I342_483_342_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_483_342_67: {
    flexGrow: 1,
    width: wp("50.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("5.054644808743163%")
  },
  Text_I342_483_342_67: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_I342_483_342_68: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666667%"),
    top: hp("19.945355191256823%")
  },
  View_342_490: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_342_490: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_342_491: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.819672131147538%")
  },
  Text_342_491: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_342_492: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.22950819672131%")
  },
  Text_342_492: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_342_500: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I342_500_342_53: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I342_500_342_54: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666654%"),
    top: hp("2.8688524590163915%")
  },
  Text_I342_500_342_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_I342_500_342_55: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666666%"),
    top: hp("0%")
  },
  Text_I342_500_342_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_I342_500_342_56: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    top: hp("2.7322404371584668%")
  },
  Text_I342_500_342_56: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_500_342_57: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.800000000000004%"),
    top: hp("14.754098360655735%")
  },
  View_I342_500_342_58: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I342_500_342_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I342_500_342_61: {
    flexGrow: 1,
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("13.934426229508194%")
  },
  View_I342_500_342_62: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("14.754098360655735%")
  },
  View_I342_500_342_63: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I342_500_342_63: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_500_342_65: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.4%"),
    top: hp("15.300546448087434%")
  },
  Text_I342_500_342_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_500_342_67: {
    flexGrow: 1,
    width: wp("50.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("5.05464480874317%")
  },
  Text_I342_500_342_67: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_I342_500_342_68: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666667%"),
    top: hp("19.945355191256827%")
  },
  View_342_501: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I342_501_342_53: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I342_501_342_54: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("2.8688524590163915%")
  },
  Text_I342_501_342_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_I342_501_342_55: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666666%"),
    top: hp("0%")
  },
  Text_I342_501_342_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_I342_501_342_56: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.80000000000001%"),
    top: hp("2.7322404371584668%")
  },
  Text_I342_501_342_56: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_501_342_57: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.79999999999998%"),
    top: hp("14.754098360655735%")
  },
  View_I342_501_342_58: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I342_501_342_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I342_501_342_61: {
    flexGrow: 1,
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("13.934426229508194%")
  },
  View_I342_501_342_62: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("14.754098360655735%")
  },
  View_I342_501_342_63: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I342_501_342_63: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_501_342_65: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.400000000000006%"),
    top: hp("15.300546448087434%")
  },
  Text_I342_501_342_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_501_342_67: {
    flexGrow: 1,
    width: wp("50.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("5.05464480874317%")
  },
  Text_I342_501_342_67: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_I342_501_342_68: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666667%"),
    top: hp("19.945355191256827%")
  },
  View_342_502: {
    width: wp("128%"),
    minWidth: wp("128%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.595628415300542%")
  },
  View_342_503: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I342_503_342_53: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I342_503_342_54: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666654%"),
    top: hp("2.868852459016402%")
  },
  Text_I342_503_342_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_I342_503_342_55: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666666%"),
    top: hp("0%")
  },
  Text_I342_503_342_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_I342_503_342_56: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    top: hp("2.732240437158474%")
  },
  Text_I342_503_342_56: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_503_342_57: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.800000000000004%"),
    top: hp("14.754098360655739%")
  },
  View_I342_503_342_58: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I342_503_342_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I342_503_342_61: {
    flexGrow: 1,
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("13.934426229508198%")
  },
  View_I342_503_342_62: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("14.754098360655739%")
  },
  View_I342_503_342_63: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I342_503_342_63: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_503_342_65: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.4%"),
    top: hp("15.300546448087438%")
  },
  Text_I342_503_342_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_503_342_67: {
    flexGrow: 1,
    width: wp("50.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("5.05464480874317%")
  },
  Text_I342_503_342_67: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_I342_503_342_68: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666667%"),
    top: hp("19.94535519125683%")
  },
  View_342_504: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I342_504_342_53: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I342_504_342_54: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("2.868852459016402%")
  },
  Text_I342_504_342_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_I342_504_342_55: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666666%"),
    top: hp("0%")
  },
  Text_I342_504_342_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_I342_504_342_56: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.80000000000001%"),
    top: hp("2.732240437158474%")
  },
  Text_I342_504_342_56: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_504_342_57: {
    flexGrow: 1,
    width: wp("2.1333333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.79999999999998%"),
    top: hp("14.754098360655739%")
  },
  View_I342_504_342_58: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I342_504_342_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I342_504_342_61: {
    flexGrow: 1,
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("13.934426229508198%")
  },
  View_I342_504_342_62: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("14.754098360655739%")
  },
  View_I342_504_342_63: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I342_504_342_63: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_504_342_65: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.400000000000006%"),
    top: hp("15.300546448087438%")
  },
  Text_I342_504_342_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_504_342_67: {
    flexGrow: 1,
    width: wp("50.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("5.05464480874317%")
  },
  Text_I342_504_342_67: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_I342_504_342_68: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666667%"),
    top: hp("19.94535519125683%")
  },
  View_342_614: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("28.278688524590162%"),
    minHeight: hp("28.278688524590162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_342_498: {
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
  View_I342_498_183_2: {
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
  View_I342_498_183_3: {
    flexGrow: 1,
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I342_498_183_4: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I342_498_183_16: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.196721259362059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    top: hp("3.961748633879779%")
  },
  View_I342_498_183_302: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_I342_498_183_303: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I342_498_183_304: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  ImageBackground_342_499: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%"),
    top: hp("5.191256830601093%")
  },
  View_342_505: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("6.147540983606557%")
  },
  Text_342_505: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_342_609: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("14.89071038251366%")
  },
  Text_342_609: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_342_610: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("23.36065573770492%")
  },
  Text_342_610: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_342_611: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("23.36065573770492%")
  },
  Text_342_611: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_342_612: {
    width: wp("19.2%"),
    height: hp("0%"),
    top: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  View_342_613: {
    width: wp("14.666666666666666%"),
    top: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%")
  },
  Text_342_613: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
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
