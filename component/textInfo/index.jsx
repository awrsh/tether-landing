import React, {useState} from 'react'
import {Box, Typography, Collapse, Button} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function index() {
  const [open,setOpen] = useState(false)
  return (
    <div className={'cryptoInfoWrapper'} id={'cryptoInfo'}>
      <Box className={`container textStyle ${open ? '' : 'bottomShadow'}`}>
        <Typography className={'mb-2'} fontSize={'26px'} variant={'h2'}>
          تتر چیست؟ آشنایی اولیه با ارز دیجیتال USDT
        </Typography>
        <Typography>
          تتر یک ارز دیجیتالی مبتنی بر بلاک چین است. رمز ارزهای تتر موجود با معادل ارزهای فیات دلار آمریکا پشتیبانی
          میشود که در یک حساب بانکی مشخص نگهداری می شوند.

          توکن های بومی شبکه Tether، با نماد USDT شناخته می شوند و ارزشی معادل 1 دلار آمریکا را دارند. به زبان ساده قیمت
          تتر همواره ثابت و 1 دلار است. به همین دلیل تتر یک استیبل کوین محسوب می شود. استیبل کوین نوعی ارز دیجیتال که
          هدف آن ثابت نگه داشتن ارزش خود به پشتوانه ارزهای فیات است.

          این ارز دیجیتال توسط سرمایه گذارانی استفاده می شود که می خواهند ضمن حفظ ارزش در بازار کریپتو، از نوسانات شدید
          سایر ارزهای دیجیتال در امان بمانند.

          شبکه بلاکچین Omni اولین شبکه ای بود که معاملات تتر روی آن پیاده سازی شد. بعد ها به دلیل کاربردی بودن USDT و
          نیاز دیگر پلتفرم ها به یک استیبل کوین قوی، تتر به دیگر شبکه ها نیز پا نهاد.

          در واقع تتر بلاک چین اختصاصی خود را ندارد - در عوض ، به عنوان کوین دوم در بلاک چین های دیگر مانند : بیت کوین،
          اتریوم، ترون، الگوراند، بیت کوین کش و او ام جی عمل می کند و توسط الگوریتم های هش مربوطه ایمن می شود.
        </Typography>
        <Typography>
          تتر یک ارز دیجیتالی مبتنی بر بلاک چین است. رمز ارزهای تتر موجود با معادل ارزهای فیات دلار آمریکا پشتیبانی
          میشود که در یک حساب بانکی مشخص نگهداری می شوند.

          توکن های بومی شبکه Tether، با نماد USDT شناخته می شوند و ارزشی معادل 1 دلار آمریکا را دارند. به زبان ساده قیمت
          تتر همواره ثابت و 1 دلار است. به همین دلیل تتر یک استیبل کوین محسوب می شود. استیبل کوین نوعی ارز دیجیتال که
          هدف آن ثابت نگه داشتن ارزش خود به پشتوانه ارزهای فیات است.

          این ارز دیجیتال توسط سرمایه گذارانی استفاده می شود که می خواهند ضمن حفظ ارزش در بازار کریپتو، از نوسانات شدید
          سایر ارزهای دیجیتال در امان بمانند.

          شبکه بلاکچین Omni اولین شبکه ای بود که معاملات تتر روی آن پیاده سازی شد. بعد ها به دلیل کاربردی بودن USDT و
          نیاز دیگر پلتفرم ها به یک استیبل کوین قوی، تتر به دیگر شبکه ها نیز پا نهاد.

          در واقع تتر بلاک چین اختصاصی خود را ندارد - در عوض ، به عنوان کوین دوم در بلاک چین های دیگر مانند : بیت کوین،
          اتریوم، ترون، الگوراند، بیت کوین کش و او ام جی عمل می کند و توسط الگوریتم های هش مربوطه ایمن می شود.
        </Typography>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Typography>
            تتر در ژوئیه 2014 به عنوان Real Coin راه اندازی شد و در ماه نوامبر توسط Tether Ltd، شرکتی که مسئول حفظ مقدار
            ذخیره ارز فیات است، به عنوان Tether تغییر نام داد. معاملات این ارز در فوریه 2015 آغاز شد.

            اولین سازندگان و توسعه دهندگان این استیبل کوین ریو کالینز (Reeve Collins)، بروک پیرس (Brock Pierce)، و کریگ
            سلارس (Craig Sellars) راه اندازی شد.

            بروک پیرس یک کارآفرین مشهور است که تعدادی از پروژه های مطرح در صنایع رمزنگاری و سرگرمی را بنیان گذاشته است. در
            سال 2014 ، پیرس مدیر بنیاد بیت کوین شد، یک سازمان غیر دولتی که برای کمک به بهبود و ارتقا بیت کوین تأسیس شده
            است. پیرس همچنین یکی از بنیانگذاران Block.one ، شرکت توسعه دهنده ایاس، یکی از بزرگترین ارزهای دیجیتال در بازار
            است.

            ریو کالینز در دو سال اول وجود شرکت مدیر عامل شرکت تتر بود. پیش از آن ، او چندین شرکت موفق را تاسیس کرده بود،
            مانند شبکه تبلیغات آنلاین Traffic Marketplace ، استودیوی سرگرمی Red Lever و وب سایت Pala Interactive. کالینز
            از سال 2020 در راس فناوری Smart Media Technologies ، یک شرکت فناوری بازاریابی و تبلیغات است.

            کریگ سلارس بیش از شش سال عضو بنیاد Omni بوده است. پروتکل Omni آن به کاربران امکان می دهد در بالای بلاکچین بیت
            کوین دارایی ها و ارزهای مبتنی بر قرارداد هوشمند را ایجاد و معامله کنند. سلارس همچنین در چندین شرکت و سازمان
            ارز رمزنگاری شده دیگر مانند Bitfinex ، Factom ، Synereo و MaidSafe Foundation کار کرده است.
          </Typography>
        </Collapse>
        <Button color={'digigrey'} onClick={() => setOpen(!open)} sx={{'&:hover':{background:'transparent'}}} disableTouchRipple size={'small'} endIcon={open ? <KeyboardArrowUpIcon fontSize={'small'}/> : <KeyboardArrowDownIcon fontSize={'small'}/>} variant={'text'}>
          {
            open ? 'نمایش کمتر' : 'نمایش بیشتر'
          }
        </Button>
      </Box>
    </div>
  )
}

export default index