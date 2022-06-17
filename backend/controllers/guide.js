const routes = require('express').Router()

const Guide = require('../models/Guide')

routes.get('/', async (req, res) => {
  const guide = await Guide.find({})
  res.json(guide)
})

routes.post('/', async (req, res) => {
  const body = req.body

  const guide = new Guide({
    imgLogoHeroSection: body.imgLogoHeroSection,
    imgProfileHeroSection: body.imgProfileHeroSection,
    bgHeroSection: body.bgHeroSection,
    titleHeroSection: body.titleHeroSection,
    paragraphHeroSection: body.paragraphHeroSection,
    btnHeroSection: body.btnHeroSection,
    titleWthetahealingSection: body.titleWthetahealingSection,
    paragraph1WthetahealingSection: body.paragraph1WthetahealingSection,
    paragraph2WthetahealingSection: body.paragraph2WthetahealingSection,
    imgWthetahealingSection: body.imgWthetahealingSection,
    titleBenefictSection: body.titleBenefictSection,
    item1BenefictSection: body.item1BenefictSection,
    item2BenefictSection: body.item2BenefictSection,
    item3BenefictSection: body.item3BenefictSection,
    item4BenefictSection: body.item4BenefictSection,
    item5BenefictSection: body.item5BenefictSection,
    imgBenefictSection: body.imgBenefictSection,
    titleWlthetahealingSection: body.titleWlthetahealingSection,
    item1WlthetahealingSection: body.item1WlthetahealingSection,
    item2WlthetahealingSection: body.item2WlthetahealingSection,
    item3WlthetahealingSection: body.item3WlthetahealingSection,
    item4WlthetahealingSection: body.item4WlthetahealingSection,
    btnWlthetahealingSection: body.btnWlthetahealingSection,
    titleAvideoSection: body.titleAvideoSection,
    paragraphAvideoSection: body.paragraphAvideoSection,
    imgAvideoSection: body.imgAvideoSection,
    titlev1AvideoSection: body.titlev1AvideoSection,
    imgv1AvideoSection: body.imgv1AvideoSection,
    pv1AvideoSection: body.pv1AvideoSection,
    titlev2AvideoSection: body.titlev2AvideoSection,
    imgv2AvideoSection: body.imgv2AvideoSection,
    pv2AvideoSection: body.pv2AvideoSection,
    titlev3AvideoSection: body.titlev3AvideoSection,
    imgv3AvideoSection: body.imgv3AvideoSection,
    pv3AvideoSection: body.pv3AvideoSection,
    titlev4AvideoSection: body.titlev4AvideoSection,
    imgv4AvideoSection: body.imgv4AvideoSection,
    pv4AvideoSection: body.pv4AvideoSection,
    titlev5AvideoSection: body.titlev5AvideoSection,
    imgv5AvideoSection: body.imgv5AvideoSection,
    pv5AvideoSection: body.pv5AvideoSection,
    imgAuthorSection: body.imgAuthorSection,
    p1AuthorSection: body.p1AuthorSection,
    p2AuthorSection: body.p2AuthorSection,
    p3AuthorSection: body.p3AuthorSection,
    p4AuthorSection: body.p4AuthorSection,
    nameAuthorSection: body.nameAuthorSection,
    propAuthorSection: body.propAuthorSection,
    btnAuthorSection: body.btnAuthorSection,
    titleTestimonialSection: body.TestimonialSection,
    t1p1TestimonialSection: body.t1p1TestimonialSection,
    t1p2TestimonialSection: body.t1p2TestimonialSection,
    t1p3TestimonialSection: body.t1p3TestimonialSection,
    t2p1TestimonialSection: body.t2p1TestimonialSection,
    t2p2TestimonialSection: body.t2p2TestimonialSection,
    t2p3TestimonialSection: body.t2p3TestimonialSection,
    t3p1TestimonialSection: body.t3p1TestimonialSection,
    t3p2TestimonialSection: body.t3p2TestimonialSection,
    t3p3TestimonialSection: body.t3p3TestimonialSection,
    imgTestimonialSection: body.imgTestimonialSection,
    pln1PlanSection: body.pln1PlanSection,
    pln1vPlanSection: body.pln1vPlanSection,
    pln1i1PlanSection: body.pln1i1PlanSection,
    pln1i2PlanSection: body.pln1i2PlanSection,
    pln1i3PlanSection: body.pln1i3PlanSection,
    pln1btnPlanSection: body.pln1btnPlanSection,
    pln2PlanSection: body.pln2PlanSection,
    pln2vPlanSection: body.pln2vPlanSection,
    pln2i1PlanSection: body.pln2i1PlanSection,
    pln2i2PlanSection: body.pln2i2PlanSection,
    pln2i3PlanSection: body.pln2i3PlanSection,
    pln2i4PlanSection: body.pln2i4PlanSection,
    pln2btnPlanSection: body.pln2btnPlanSection,
    pln3PlanSection: body.pln3PlanSection,
    pln3vPlanSection: body.pln3vPlanSection,
    pln3i1PlanSection: body.pln3i1PlanSection,
    pln3i2PlanSection: body.pln3i2PlanSection,
    pln3i3PlanSection: body.pln3i3PlanSection,
    pln3i4PlanSection: body.pln3i4PlanSection,
    pln3i5PlanSection: body.pln3i5PlanSection,
    pln3i6PlanSection: body.pln3i6PlanSection,
    pln3btnPlanSection: body.pln3btnPlanSection,
    titleFaqSection: body.titleFaqSection,
    ask1FaqSection: body.ask1FaqSection,
    answer1FaqSection: body.answer1FaqSection,
    ask2FaqSection: body.ask2FaqSection,
    answer2FaqSection: body.answer2FaqSection,
    ask3FaqSection: body.ask3FaqSection,
    answer3FaqSection: body.answer3FaqSection,
    ask4FaqSection: body.ask4FaqSection,
    answer4FaqSection: body.answer4FaqSection,
    titleContactSection: body.titleContactSection,
    paragraphContactSection: body.paragraphContactSection,
    iconContactSection: body.iconContactSection,
    linkContactSection: body.linkContactSection,
  })

  const savedGuide = await guide.save()
  res.status(201).json(savedGuide)
})

routes.put('/:id', async (req, res) => {
  const guide = req.body

  const updatedGuide = await Guide.findByIdAndUpdate(req.params.id, guide, { new: true })
  res.json(updatedGuide.toJSON())
})

module.exports = routes