<style scoped>
  @import '../assets/less/register.css';
</style>
<template>
  <div id="register">
    <header class="header">
      <div class="content clearfix">
        <p class="logo">
          <img src="../assets/img/Logo.jpg" alt="">
          <span>新用户注册</span>
        </p>
        <p class="login">
          已有账号<a>去登录</a>
        </p>
      </div>
    </header>
    <div class="index">
      <p>欢迎加入有数传播大家庭</p>
      <div class="content">
        <div>
          <template>
            <Tabs>
              <TabPane label="企业账号" icon="email">
                <div class="enterprise">
                  <div class="tabing">
                    <div></div>
                    <ul>
                      <li class="colorgre"><a href="javascript:;" class="bgcolor">1</a><br>邮箱验证</li>
                      <li v-bind:class="isgreen1"><a href="javascript:;" v-bind:class="greenbg1">2</a><br>设置密码</li>
                      <li v-bind:class="isgreen2"><a href="javascript:;" v-bind:class="greenbg2"><Icon type="checkmark-round"></Icon></a><br>完善信息</li>
                    </ul>
                  </div>
                  <ul class="tabing-index">
                    <li v-if="current == 0" class="email">
                      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                        <p>
                          <label>账号</label>
                          <FormItem prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="邮箱（企业）/手机号（个人）"></Input>
                          </FormItem>
                        </p>
                        <p class="code">
                          <label>验证码</label>
                          <FormItem prop="code">
                            <Input type="text"  v-model="formInline.code" placeholder="请输入验证码"></Input>
                          </FormItem>
                          <a href="javascript:;" @click="openCode">获取验证码</a>
                        </p>
                        <p class="protocol">
                          <FormItem prop="protocol">
                            <CheckboxGroup v-model="formInline.protocol">
                              <Checkbox label="true">我已阅读并同意<a href="###" @click="openProtocol">《有数服务协议》</a></Checkbox>
                            </CheckboxGroup>
                          </FormItem>
                        </p>
                        <p class="button">
                          <FormItem>
                            <Button class="index-button" value="true" type="primary" @click="handleSubmit('formInline')">登录</Button>
                          </FormItem>
                        </p>
                      </Form>
                    </li>
                    <!-- 设置密码-->
                    <li v-if="current == 1" class="setpass">
                      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                        <FormItem label="密码" prop="passwd" >
                          <Input type="password" v-model="formCustom.passwd"></Input><span>6-20位，字母（区分大小写）、数字、符号</span>
                        </FormItem>
                        <FormItem label="确认密码" prop="passwdCheck">
                          <Input type="password" v-model="formCustom.passwdCheck"></Input><span>请再次输入密码</span>
                        </FormItem>
                        <FormItem>
                          <Button type="primary" @click="handleSubmit('formCustom')">完成</Button>
                        </FormItem>
                      </Form>
                    </li>
                    <li v-if="current == 2" class="preinfo">
                      <a href="javascript:;" ><Icon type="checkmark-round"></Icon></a><span class="icoinfo">注册成功</span>
                      <p>为了给您提供更好的服务，请完善信息</p>
                      <div class="input">
                      <span>企业全称</span><Input v-model="companyname" placeholder="请输入企业全称" style="width: 326px"></Input>
                      </div>
                      <div class="input">
                      <span>企业简称</span><Input v-model="companysimname" placeholder="建议在四个字以内" style="width: 326px"></Input>
                      </div>
                    </li>
                  </ul>
                </div>
              </TabPane>
              <TabPane label="个人账号" icon="android-phone-portrait">
                <div class="enterprise">

                </div>
              </TabPane>
            </Tabs>
          </template>
        </div>
      </div>
    </div>
    <footer class="footer">
      <p>商务合作：电话021-0000000    邮箱：0000000@youshu.com</p>
      <p>Copyright © 2011-2017 XXXXXXXX.沪ICP备XXXXXXX号-14</p>
    </footer>
    <div class="protocol-index" v-show="ProtocolShow">
      <div>
        <p>有数服务协议</p>
        <div>
          　　××网通过国际互联网络为您提供一种全新的在线社交方式；您只有完全同意下列所有服务条款并完成注册程序，才能成为××网的用户并使用相应服务。您在使用××网提供的各项服务之前，应仔细阅读本用户协议。<br>
          　　您在注册程序过程中点击“同意条款，立即注册”按钮即表示您与××网达成协议，完全接受本服务条款项下的全部条款。您一旦使用××网的服务，即视为您已了解并完全同意本服务条款各项内容，包括××网对服务条款随时做的任何修改。<br>
          <br>
          一．服务内容<br>
          <br>
          　　××网的具体服务内容由××网根据实际情况提供，例如个人信息、个人分享信息以及评论，在线交流等。××网保留变更、中断或终止部分网络服务的权利。<br>
          ××网保留根据实际情况随时调整××网平台提供的服务种类、形式。××网不承担因业务调整给用户造成的损失。<br>
          <br>
          二．注册义务<br>
          <br>
          为了能使用本服务，您同意以下事项：依本服务注册提示请您填写正确的注册邮箱、密码和名号，并确保今后更新的登陆邮箱、名号、头像等资料的有效性和合法性。若您提供任何违法、不道德或××认为不适合在××上展示的资料；或者××有理由怀疑你的资料属于程序或恶意操作，××有权暂停或终止您的帐号，并拒绝您于现在和未来使用本服务之全部或任何部分。<br>

          ××无须对任何用户的任何登记资料承担任何责任，包括但不限于鉴别、核实任何登记资料的真实性、正确性、完整性、适用性及/或是否为最新资料的责任。<br>

          三．内容使用权<br>

          用户在××网发表的内容（包含但不限于××网目前各产品功能里的内容）仅表明其个人的立场和观点，并不代表××网的立场或观点。作为内容的发表者，需自行对所发表内容负责，因所发表内容引发的一切纠纷，由该内容的发表者承担全部法律及连带责任。××网不承担任何法律及连带责任。 用户在××网发布侵犯他人知识产权或其他合法权益的内容，××网有权予以删除，××网不承担任何法律及连带责任，并保留移交司法机关处理的权利。<br>　　

          用户不得使用××网服务发送或传播敏感信息和违反国家法律制度的信息，包括但不限于下列信息：<br>

          1. 反对宪法所确定的基本原则的；<br>

          2.危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；<br>

          3. 损害国家荣誉和利益的；<br>

          4. 煽动民族仇恨、民族歧视，破坏民族团结的；<br>

          5. 破坏国家宗教政策，宣扬邪教和封建迷信的；<br>

          6. 散布谣言，扰乱社会秩序，破坏社会稳定的；<br>

          7. 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br>

          8.侮辱或者诽谤他人，侵害<br>

          他人合法权益的；<br>

          9.含有法律、行政法规禁止的其他内容的。<br>

          用户承诺发表言论要：爱国、守法、自律、真实、文明。不传输任何非法的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的，淫秽的、危害国家安全的、泄露国家机密的、破坏国家宗教政策和民族团结的以及其它违反法律法规及政策的内容。 若用户的行为不符合以上提到的服务条款， ××将作出独立判断立即取消用户服务帐号。用户需对自己在网上的行为承担法律责任，××网不承担任何法律及连带责任。<br>
          四．隐私保护<br>

          保护用户隐私是××网的重点原则，××网通过技术手段、提供隐私保护服务功能、强化内部管理等办法充分保护用户的个人资料安全。<br>

          本隐私声明适用于××的所有相关服务，随着××服务范围的扩大，隐私声明的内容可由××随时更新，且毋须另行通知。更新后的隐私声明一旦在网页上公布即有效代替原来的隐私声明。<br>

          　　××严格保护您个人信息的安全。我们使用各种安全技术和程序来保护您的个人信息不被未经授权的访问、使用或泄漏。<br>

          　　××会在法律要求或符合××的相关服务条款、软件许可使用协议约定的情况下透露您的个人信息，或者有充分理由相信必须这样做才能：<br>

          (a) 满足法律或行政法规的明文规定，或者符合××网站适用的法律程序；<br>

          （b）符合××相关服务条款、软件许可使用协议的约定；<br>

          (c) 保护××的权利或财产，以及在紧急情况下保护××员工、××产品或服务的用户或大众的个人安全。<br>

          　　××不会未经您的允许将这些信息与第三方共享，本声明已经列出的上述情况除外。<br>

          五．社区准则<br>

          　　用户使用本服务的行为若有任何违反国家法律法规或侵犯任何第三方的合法权益的情形时，××网有权直接删除该等违反规定之内容。<br>

          　　除非与××网单独签订合同，否则不得将社区用于商业目的；××网仅供个人使用。<br>

          　　不可以通过自动方式创建账户，也不可以对账户使用自动系统执行操作。<br>

          　　用户影响系统总体稳定性或完整性的操作可能会被暂停或终止，直到问题得到解决。
        </div>
        <a href="###" @click="closeProtocol">确定</a>
      </div>
    </div>
    <div class="code-box" v-show="codeShow">
      <div>
        <input type="text" v-model="randomCode.new">
        <span @click="randomCodeShow"><Icon type="refresh"></Icon></span>
        <p class="key" @click="randomCodeShow">{{randomCode.true}}</p>
        <a @click="randomCodetrue">确定</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      // 设置密码
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          console.log(value)
          callback(new Error('请输入密码'))
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck')
          }
          callback()
        }
      }
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        current: 0,  // 翻页
        ProtocolShow: false,  // 协议
        codeShow: false,  // 验证码
        randomCode: {
          new: '',
          true: ''
        },
        formInline: {
          user: '',
          code: '',
          protocol: []
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ],
          protocol: [
            { required: true, type: 'array', min: 1, message: '请认真阅读协议并打勾', trigger: 'change' }
          ]
        },
        formCustom: { // 设置密码
          passwd: '',
          passwdCheck: '',
          age: ''
        },
        ruleCustom: {
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ]
        },
        companyname: '',
        companysimname: ''
      }
    },

    computed: {
      isgreen1: function () {
        return {
          colorgre: this.current > 0
        }
      },
      greenbg1: function () {
        return {
          bgcolor: this.current > 0
        }
      },
      isgreen2: function () {
        return {
          colorgre: this.current > 1
        }
      },
      greenbg2: function () {
        return {
          bgcolor: this.current > 1
        }
      }
    },
    methods: {
      next () {
        if (this.current === 3) {
          this.current = 0
        } else {
          this.current += 1
        }
      },
      handleSubmit (name) {  // 邮箱验证
        this.$refs[name].validate((valid) => {
          if (valid) {
            var data = this.formInline
            console.log(data)
            this.current += 1
            this.$Message.success('提交成功!')
            console.log(this.current)
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      openProtocol () {
        this.ProtocolShow = true
      },
      closeProtocol () {
        this.ProtocolShow = false
      },
      openCode () {
        this.codeShow = true
        this.randomCodeShow()
      },
      randomCodeShow () {
        var code = ''
        var codeLength = 4 // 验证码的长度
        var codeChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] // 所有候选组 成 验 证 码 的 字 符，当 然 也 可 以 用 中 文 的
        for (var i = 0; i < codeLength; i++) {
          var charNum = Math.floor(Math.random() * 52)
          code += codeChars[charNum]
        }
        this.randomCode.true = code
      },
      randomCodetrue () { // 验证密码
        if (this.randomCode.new === this.randomCode.true) {
          this.codeShow = false
        } else {

        }
      }
//    ,
//      handleSubmit (name) {
//        this.$refs[name].validate((valid) => {
//          if (valid) {
//            this.$Message.success('提交成功!')
//            this.current += 1
//          } else {
//            this.$Message.error('表单验证失败!')
//          }
//        })
//      }
    }
  }
</script>


