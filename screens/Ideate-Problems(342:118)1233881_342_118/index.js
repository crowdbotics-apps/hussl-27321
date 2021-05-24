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
      <View style={styles.View_345_18} />
      <View style={styles.View_346_147}>
        <View style={styles.View_I346_147_346_84}>
          <View style={styles.View_I346_147_346_85} />
          <View style={styles.View_I346_147_346_86}>
            <Text style={styles.Text_I346_147_346_86}>“</Text>
          </View>
          <View style={styles.View_I346_147_346_87}>
            <Text style={styles.Text_I346_147_346_87}>“</Text>
          </View>
          <View style={styles.View_I346_147_346_88}>
            <Text style={styles.Text_I346_147_346_88}>3d</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ba/6313/5bebd25ebbd80dd79f90303762664b0e"
            }}
            style={styles.ImageBackground_I346_147_346_91}
          />
          <View style={styles.View_I346_147_346_94}>
            <Text style={styles.Text_I346_147_346_94}>John T</Text>
          </View>
          <View style={styles.View_I346_147_346_95}>
            <Text style={styles.Text_I346_147_346_95}>
              Hotels are too expensive
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0f/bd75/1411181c74a84b051eff2c2301e2befa"
            }}
            style={styles.ImageBackground_I346_147_346_96}
          />
        </View>
        <View style={styles.View_I346_147_346_12}>
          <View style={styles.View_I346_147_346_13}>
            <Text style={styles.Text_I346_147_346_13}>2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3917/6369/9bd24b368c077a96ddff93ada39d30f3"
            }}
            style={styles.ImageBackground_I346_147_346_14}
          />
        </View>
        <View style={styles.View_I346_147_346_16}>
          <View style={styles.View_I346_147_346_17}>
            <Text style={styles.Text_I346_147_346_17}>325</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
            }}
            style={styles.ImageBackground_I346_147_346_18}
          />
        </View>
      </View>
      <View style={styles.View_346_148}>
        <View style={styles.View_346_149} />
        <View style={styles.View_346_150}>
          <Text style={styles.Text_346_150}>“</Text>
        </View>
        <View style={styles.View_346_151}>
          <Text style={styles.Text_346_151}>“</Text>
        </View>
        <View style={styles.View_346_152}>
          <Text style={styles.Text_346_152}>3d</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ba/6313/5bebd25ebbd80dd79f90303762664b0e"
          }}
          style={styles.ImageBackground_346_155}
        />
        <View style={styles.View_346_158}>
          <Text style={styles.Text_346_158}>John Tan</Text>
        </View>
        <View style={styles.View_346_159}>
          <Text style={styles.Text_346_159}>Hotels are too expensive</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0f/bd75/1411181c74a84b051eff2c2301e2befa"
          }}
          style={styles.ImageBackground_346_160}
        />
      </View>
      <View style={styles.View_342_126}>
        <Text style={styles.Text_342_126}>Ideate</Text>
      </View>
      <View style={styles.View_342_127}>
        <Text style={styles.Text_342_127}>CONSUMER</Text>
      </View>
      <View style={styles.View_342_128}>
        <Text style={styles.Text_342_128}>EDUCATION</Text>
      </View>
      <View style={styles.View_342_129}>
        <Text style={styles.Text_342_129}>ARTIFICIAL INTELLIGENCE</Text>
      </View>
      <View style={styles.View_342_130}>
        <Text style={styles.Text_342_130}>Solutions</Text>
      </View>
      <View style={styles.View_342_131}>
        <Text style={styles.Text_342_131}>Problems</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dd4/297b/c5f800e1abb10640148322509456bcba"
        }}
        style={styles.ImageBackground_342_132}
      />
      <View style={styles.View_342_134}>
        <Text style={styles.Text_342_134}>Pitches</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f61e/e9c0/d187098a1363bad1307f336697e12e63"
        }}
        style={styles.ImageBackground_342_140}
      />
      <View style={styles.View_342_446}>
        <Text style={styles.Text_342_446}>hussl.</Text>
      </View>
      <View style={styles.View_346_99}>
        <View style={styles.View_346_84}>
          <View style={styles.View_346_85} />
          <View style={styles.View_346_86}>
            <Text style={styles.Text_346_86}>“</Text>
          </View>
          <View style={styles.View_346_87}>
            <Text style={styles.Text_346_87}>“</Text>
          </View>
          <View style={styles.View_346_88}>
            <Text style={styles.Text_346_88}>3d</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ba/6313/5bebd25ebbd80dd79f90303762664b0e"
            }}
            style={styles.ImageBackground_346_91}
          />
          <View style={styles.View_346_94}>
            <Text style={styles.Text_346_94}>John T</Text>
          </View>
          <View style={styles.View_346_95}>
            <Text style={styles.Text_346_95}>Hotels are too expensive</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0f/bd75/1411181c74a84b051eff2c2301e2befa"
            }}
            style={styles.ImageBackground_346_96}
          />
        </View>
        <View style={styles.View_346_12}>
          <View style={styles.View_346_13}>
            <Text style={styles.Text_346_13}>2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3917/6369/9bd24b368c077a96ddff93ada39d30f3"
            }}
            style={styles.ImageBackground_346_14}
          />
        </View>
        <View style={styles.View_346_16}>
          <View style={styles.View_346_17}>
            <Text style={styles.Text_346_17}>325</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
            }}
            style={styles.ImageBackground_346_18}
          />
        </View>
      </View>
      <View style={styles.View_342_714}>
        <View style={styles.View_342_654} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a205/7b69/85cc861e396345e8ad4f92379d8c9935"
          }}
          style={styles.ImageBackground_342_655}
        />
        <View style={styles.View_342_658}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acc1/bc07/d0659af62ba20de29b5a604198a24139"
            }}
            style={styles.ImageBackground_342_659}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a2d/63fc/408fb85c4bb6e63c8f409553279af0b4"
          }}
          style={styles.ImageBackground_342_664}
        />
        <View style={styles.View_342_665}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f31/89a1/e2656eed01423039d3027bbcdf28091a"
            }}
            style={styles.ImageBackground_342_666}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df9/a63d/9cb84191775c9ad96f06cc94de757391"
            }}
            style={styles.ImageBackground_342_667}
          />
        </View>
        <View style={styles.View_342_670}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f31/89a1/e2656eed01423039d3027bbcdf28091a"
            }}
            style={styles.ImageBackground_342_671}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df9/a63d/9cb84191775c9ad96f06cc94de757391"
            }}
            style={styles.ImageBackground_342_672}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f35/a5ff/3ea6dd5f3c06941106417f9e5177b39a"
          }}
          style={styles.ImageBackground_342_675}
        />
      </View>
      <View style={styles.View_346_100}>
        <View style={styles.View_346_101} />
        <View style={styles.View_346_102}>
          <Text style={styles.Text_346_102}>“</Text>
        </View>
        <View style={styles.View_346_103}>
          <Text style={styles.Text_346_103}>“</Text>
        </View>
        <View style={styles.View_346_104}>
          <Text style={styles.Text_346_104}>3d</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ba/6313/5bebd25ebbd80dd79f90303762664b0e"
          }}
          style={styles.ImageBackground_346_107}
        />
        <View style={styles.View_346_110}>
          <Text style={styles.Text_346_110}>John T</Text>
        </View>
        <View style={styles.View_346_111}>
          <Text style={styles.Text_346_111}>Hotels are too expensive</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0f/bd75/1411181c74a84b051eff2c2301e2befa"
          }}
          style={styles.ImageBackground_346_112}
        />
      </View>
      <View style={styles.View_346_113}>
        <View style={styles.View_I346_113_346_84}>
          <View style={styles.View_I346_113_346_85} />
          <View style={styles.View_I346_113_346_86}>
            <Text style={styles.Text_I346_113_346_86}>“</Text>
          </View>
          <View style={styles.View_I346_113_346_87}>
            <Text style={styles.Text_I346_113_346_87}>“</Text>
          </View>
          <View style={styles.View_I346_113_346_88}>
            <Text style={styles.Text_I346_113_346_88}>3d</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ba/6313/5bebd25ebbd80dd79f90303762664b0e"
            }}
            style={styles.ImageBackground_I346_113_346_91}
          />
          <View style={styles.View_I346_113_346_94}>
            <Text style={styles.Text_I346_113_346_94}>John T</Text>
          </View>
          <View style={styles.View_I346_113_346_95}>
            <Text style={styles.Text_I346_113_346_95}>
              Hotels are too expensive
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0f/bd75/1411181c74a84b051eff2c2301e2befa"
            }}
            style={styles.ImageBackground_I346_113_346_96}
          />
        </View>
        <View style={styles.View_I346_113_346_12}>
          <View style={styles.View_I346_113_346_13}>
            <Text style={styles.Text_I346_113_346_13}>2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3917/6369/9bd24b368c077a96ddff93ada39d30f3"
            }}
            style={styles.ImageBackground_I346_113_346_14}
          />
        </View>
        <View style={styles.View_I346_113_346_16}>
          <View style={styles.View_I346_113_346_17}>
            <Text style={styles.Text_I346_113_346_17}>325</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
            }}
            style={styles.ImageBackground_I346_113_346_18}
          />
        </View>
      </View>
      <View style={styles.View_346_114}>
        <View style={styles.View_346_115} />
        <View style={styles.View_346_116}>
          <Text style={styles.Text_346_116}>“</Text>
        </View>
        <View style={styles.View_346_117}>
          <Text style={styles.Text_346_117}>“</Text>
        </View>
        <View style={styles.View_346_118}>
          <Text style={styles.Text_346_118}>3d</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ba/6313/5bebd25ebbd80dd79f90303762664b0e"
          }}
          style={styles.ImageBackground_346_121}
        />
        <View style={styles.View_346_124}>
          <Text style={styles.Text_346_124}>John Tan</Text>
        </View>
        <View style={styles.View_346_125}>
          <Text style={styles.Text_346_125}>Hotels are too expensive</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0f/bd75/1411181c74a84b051eff2c2301e2befa"
          }}
          style={styles.ImageBackground_346_126}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_345_18: {
    width: wp("99.73333333333333%"),
    minWidth: wp("99.73333333333333%"),
    height: hp("24.316939890710383%"),
    minHeight: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("31.557377049180328%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_346_147: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("88.66120218579235%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I346_147_346_84: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I346_147_346_85: {
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I346_147_346_86: {
    width: wp("7.466666666666668%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666663%")
  },
  Text_I346_147_346_86: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I346_147_346_87: {
    width: wp("7.466666666666668%"),
    top: hp("7.103825136612031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.8%")
  },
  Text_I346_147_346_87: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I346_147_346_88: {
    width: wp("14.666666666666666%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.79999999999999%")
  },
  Text_I346_147_346_88: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I346_147_346_91: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("13.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%")
  },
  View_I346_147_346_94: {
    width: wp("9.333333333333334%"),
    top: hp("15.300546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%")
  },
  Text_I346_147_346_94: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I346_147_346_95: {
    width: wp("50.66666666666667%"),
    top: hp("7.103825136612031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333334%")
  },
  Text_I346_147_346_95: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_I346_147_346_96: {
    width: wp("9.866666666666667%"),
    height: hp("2.5956284153005464%"),
    top: hp("19.945355191256823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%")
  },
  View_I346_147_346_12: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.86796875%"),
    top: hp("14.754098360655746%")
  },
  View_I346_147_346_13: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3999999999999915%")
  },
  Text_I346_147_346_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I346_147_346_14: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I346_147_346_16: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("14.754098360655746%")
  },
  View_I346_147_346_17: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601285807291667%")
  },
  Text_I346_147_346_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I346_147_346_18: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_346_148: {
    width: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    top: hp("87.8415300546448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_346_149: {
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_346_150: {
    width: wp("14.399999999999999%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%")
  },
  Text_346_150: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_346_151: {
    width: wp("14.399999999999999%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.866666666666674%")
  },
  Text_346_151: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_346_152: {
    width: wp("14.666666666666666%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.80000000000001%")
  },
  Text_346_152: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_346_155: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("13.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%")
  },
  View_346_158: {
    width: wp("13.333333333333334%"),
    top: hp("15.300546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.400000000000006%")
  },
  Text_346_158: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_159: {
    width: wp("50.66666666666667%"),
    top: hp("5.054644808743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%")
  },
  Text_346_159: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_346_160: {
    width: wp("9.866666666666667%"),
    height: hp("2.5956284153005464%"),
    top: hp("19.945355191256823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666667%")
  },
  View_342_126: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("14.89071038251366%")
  },
  Text_342_126: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_342_127: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("29.23497267759563%")
  },
  Text_342_127: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_342_128: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("58.879781420765035%")
  },
  Text_342_128: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_342_129: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("85.65573770491804%")
  },
  Text_342_129: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_342_130: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("23.36065573770492%")
  },
  Text_342_130: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_342_131: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("23.36065573770492%")
  },
  Text_342_131: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_342_132: {
    width: wp("19.2%"),
    height: hp("0%"),
    top: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  View_342_134: {
    width: wp("14.666666666666666%"),
    top: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%")
  },
  Text_342_134: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_342_140: {
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
  View_342_446: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("6.147540983606557%")
  },
  Text_342_446: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_346_99: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("33.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_346_84: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_346_85: {
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_346_86: {
    width: wp("7.466666666666668%"),
    top: hp("2.868852459016402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666663%")
  },
  Text_346_86: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_346_87: {
    width: wp("7.466666666666668%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.8%")
  },
  Text_346_87: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_346_88: {
    width: wp("14.666666666666666%"),
    top: hp("2.732240437158474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.79999999999999%")
  },
  Text_346_88: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_346_91: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("13.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%")
  },
  View_346_94: {
    width: wp("9.333333333333334%"),
    top: hp("15.300546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%")
  },
  Text_346_94: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_95: {
    width: wp("50.66666666666667%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333334%")
  },
  Text_346_95: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_346_96: {
    width: wp("9.866666666666667%"),
    height: hp("2.5956284153005464%"),
    top: hp("19.945355191256837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%")
  },
  View_346_12: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.86796875%"),
    top: hp("14.754098360655739%")
  },
  View_346_13: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3999999999999915%")
  },
  Text_346_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_346_14: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_346_16: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("14.754098360655739%")
  },
  View_346_17: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601285807291667%")
  },
  Text_346_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_346_18: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_342_714: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.59016393442623%")
  },
  View_342_654: {
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
  ImageBackground_342_655: {
    width: wp("6.933333333333333%"),
    height: hp("3.5103552979849724%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  View_342_658: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.46666666666667%")
  },
  ImageBackground_342_659: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_342_664: {
    width: wp("6.933333333333333%"),
    height: hp("3.196721259362059%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%")
  },
  View_342_665: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_342_666: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_342_667: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.4590163934426386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  View_342_670: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_342_671: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_342_672: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.4590163934426386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  ImageBackground_342_675: {
    width: wp("7.1111109415690095%"),
    height: hp("3.278688524590164%"),
    top: hp("4.234972677595636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%")
  },
  View_346_100: {
    width: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    top: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_346_101: {
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_346_102: {
    width: wp("14.399999999999999%"),
    top: hp("2.868852459016402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%")
  },
  Text_346_102: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_346_103: {
    width: wp("14.399999999999999%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.866666666666674%")
  },
  Text_346_103: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_346_104: {
    width: wp("14.666666666666666%"),
    top: hp("2.732240437158474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.80000000000001%")
  },
  Text_346_104: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_346_107: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("13.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%")
  },
  View_346_110: {
    width: wp("9.333333333333334%"),
    top: hp("15.300546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.400000000000006%")
  },
  Text_346_110: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_111: {
    width: wp("50.66666666666667%"),
    top: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%")
  },
  Text_346_111: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_346_112: {
    width: wp("9.866666666666667%"),
    height: hp("2.5956284153005464%"),
    top: hp("19.945355191256837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666667%")
  },
  View_346_113: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("61.885245901639344%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I346_113_346_84: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.8196721311475486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I346_113_346_85: {
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I346_113_346_86: {
    width: wp("7.466666666666668%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666663%")
  },
  Text_I346_113_346_86: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I346_113_346_87: {
    width: wp("7.466666666666668%"),
    top: hp("7.103825136612031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.8%")
  },
  Text_I346_113_346_87: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I346_113_346_88: {
    width: wp("14.666666666666666%"),
    top: hp("2.732240437158474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.79999999999999%")
  },
  Text_I346_113_346_88: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I346_113_346_91: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("13.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%")
  },
  View_I346_113_346_94: {
    width: wp("9.333333333333334%"),
    top: hp("15.300546448087445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%")
  },
  Text_I346_113_346_94: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I346_113_346_95: {
    width: wp("50.66666666666667%"),
    top: hp("7.103825136612031%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333334%")
  },
  Text_I346_113_346_95: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_I346_113_346_96: {
    width: wp("9.866666666666667%"),
    height: hp("2.5956284153005464%"),
    top: hp("19.945355191256837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%")
  },
  View_I346_113_346_12: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.86796875%"),
    top: hp("14.754098360655739%")
  },
  View_I346_113_346_13: {
    width: wp("2.1333333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3999999999999915%")
  },
  Text_I346_113_346_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I346_113_346_14: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I346_113_346_16: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("14.754098360655739%")
  },
  View_I346_113_346_17: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601285807291667%")
  },
  Text_I346_113_346_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I346_113_346_18: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_346_114: {
    width: wp("62.93333333333333%"),
    height: hp("22.540983606557376%"),
    top: hp("61.065573770491795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_346_115: {
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_346_116: {
    width: wp("14.399999999999999%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%")
  },
  Text_346_116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_346_117: {
    width: wp("14.399999999999999%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.866666666666674%")
  },
  Text_346_117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_346_118: {
    width: wp("14.666666666666666%"),
    top: hp("2.732240437158474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.80000000000001%")
  },
  Text_346_118: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_346_121: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("13.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%")
  },
  View_346_124: {
    width: wp("13.333333333333334%"),
    top: hp("15.300546448087445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.400000000000006%")
  },
  Text_346_124: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_346_125: {
    width: wp("50.66666666666667%"),
    top: hp("5.054644808743177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%")
  },
  Text_346_125: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_346_126: {
    width: wp("9.866666666666667%"),
    height: hp("2.5956284153005464%"),
    top: hp("19.945355191256837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666667%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
